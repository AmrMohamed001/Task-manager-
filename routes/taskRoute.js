const express = require('express')
const router = express.Router()
const task = require('../controllers/taskController')
const {models} = require("mongoose");
router.route('/').get(task.getAllTasks).post(task.addTask)
router.route('/:id').get(task.getTask).patch(task.updateTask).delete(task.deleteTask)

module.exports = router
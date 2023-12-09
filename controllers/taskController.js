const Task = require('../models/taskModel')
const wrapper = require('../middlewares/catchAsync')
const AppError = require('../middlewares/appError')
///////////////////////////////////////////////
exports.getAllTasks = wrapper(async (req, res, next) => {
    const tasks = await Task.find()
    res.status(200).json({
        status: 'success',
        tasks
    })
})

exports.getTask = wrapper(async (req, res, next) => {
    const task = await Task.findById(req.params.id)
    if (!task) return next(new AppError(404, `No task with this id : ${req.params.id}`))
    res.status(200).json({
        status: 'success',
        task
    })
})

exports.addTask = wrapper(async (req, res, next) => {
    const task = await Task.create(req.body)
    res.status(201).json({
        status: 'success',
        task
    })
})

exports.updateTask = wrapper(async (req, res, next) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) return next(new AppError(404, `No task with this id : ${req.params.id}`))
    res.status(200).json({
        status: 'success',
        task
    })
})
exports.deleteTask = wrapper(async (req, res, next) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return next(new AppError(404, `No task with this id : ${req.params.id}`))
    res.status(204).json({
        status: 'success',
        data: null
    })
})
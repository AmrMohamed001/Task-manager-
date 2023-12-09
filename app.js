const express = require('express')
const app = express()
const taskRoute = require('./routes/taskRoute')
const AppError = require('./middlewares/appError')
const gError = require('./controllers/errorController')
///////////////////////////////////////////////////////
app.use(express.json())
app.use(express.static('./public'))
///////////////////////////////////////////////////////
app.use('/api/v1/tasks', taskRoute)
app.all('*', (req, res, next) => {
    next(new AppError(404, 'this page is not found'))
})
app.use(gError)
//////////////////////////////////////////////////////
module.exports = app



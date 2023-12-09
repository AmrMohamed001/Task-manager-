module.exports = (err, req, res, next) => {
    err.statusCode ||= 500
    err.status ||= 'server error'
    res.status(err.statusCode).json(
        {
            status: err.status,
            data: {
                message: err.message,
                error: err,
                stack: err.stack,
            },
        });
}
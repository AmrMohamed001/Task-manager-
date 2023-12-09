class AppError extends Error {
    constructor(status, message) {
        super(message);
        this.statusCode = status;
        this.isOperational = true
        this.status = `${status}`.startsWith('4') ? 'failed ' : 'server error'
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = AppError
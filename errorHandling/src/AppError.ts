export default class AppError extends Error {
    
    errorCode: string
    statusCode: number

    constructor(erroCode: string, message: string, statusCode: number) {
        super(message)
        this.errorCode = erroCode
        this.statusCode = statusCode
    }
}
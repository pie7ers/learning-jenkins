import { Request, Response, NextFunction } from 'express'
import { ValidationErrorItem } from 'joi'
import AppError from '../AppError'

interface IGenericError {
    errorCode: string,
    message: string,
}

const genericError = (errorCode: string, message: string): IGenericError => {
    return {
        errorCode,
        message
    }
}

const joiGetType = (details: ValidationErrorItem[]) => {
    const requiredAttributes = []
    const noAllowedAttributes = []
    for (let i = 0; i < details.length; i++) {
        const detail = details[i]
        if(detail.type.includes('required')) requiredAttributes.push(detail.context?.label)
        if(detail.type.includes('unknown')) noAllowedAttributes.push(detail.context?.label)
    }
    return {
        requiredAttributes,
        noAllowedAttributes
    }
}

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    if (error?.isJoi) {
        const errorCode = 400;
        return res.status(errorCode).send({
            erroCode: "412",
            error: error?.name,
            requiredAttributes: joiGetType(error.details).requiredAttributes,
            //noAllowedAttributes: joiGetType(error.details).noAllowedAttributes
        })
    }
    if (error instanceof AppError){
        return res.status(error.statusCode).send({
            error: error.errorCode,
            message: error.message
        })
    }
    if (error) {
        const errorCode = 400;
        return res.status(errorCode).send(genericError(String(errorCode), error.message))
    }
    return res.status(500).send(genericError(String(500), "something is broken"))
}
import { Request, Response } from 'express'
import { fetchUsers, fetchUserById } from '../services/userService'
import { tryCatch } from '../utils/trycatch'
import { loginSchema } from '../models/users'
import AppError from '../AppError'

export const getUsers = (req: Request, res: Response): void => {
    const users = fetchUsers()
    res.json(users)
}

export const getUser = (req: Request, res: Response): void => {
    const userId = Number(req.params.id)
    const user = fetchUserById(userId)
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).send();
    }
}


/* export const login = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = loginSchema.validate(req.body, { abortEarly: false })
    next(error)
    return res.status(200).send({ message: 'ok' });
}) */


/* export const login = (req: Request, res: Response, next: NextFunction) => {
    try {
        //const { error, value } = loginSchema.validate(req.body, { abortEarly: false })
        //if(error) throw new Error(JSON.stringify(error))
        if (!req.body.user)
            throw new Error('user required')
    } catch (error) {
        return next(error)
    }
    return res.status(200).send({ message: 'ok' });
} */

/* export const login = tryCatch(async (req: Request, res: Response) => {
    if (!req.body.user)
        throw new Error('user required')
    return res.status(200).send({ message: 'ok' });
}) */

export const login = tryCatch(async (req: Request, res: Response) => {
    const { error, value } = loginSchema.validate(req.body, { abortEarly: false })
    if (error) throw error
    if (!req.body?.test) throw new AppError("TEST_APP_ERROR", "test app error", 412)
    return res.status(200).send({ message: 'ok' });
})


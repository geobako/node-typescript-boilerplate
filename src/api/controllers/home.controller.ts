import { Request, Response, NextFunction } from 'express'



export const visitHomePage = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello')
}
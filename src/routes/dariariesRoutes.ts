import  express, { Request, Response }  from "express";

const diariesRouter = express.Router()

diariesRouter.get('/', (_req:Request, res: Response) => {
    res.send('api/get')
})

export default diariesRouter
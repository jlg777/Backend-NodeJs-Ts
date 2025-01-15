import express from 'express'
import { findId, getEntries } from '../services/diariesServices'

const diariesRouter = express.Router()

diariesRouter.get('/', getEntries)

diariesRouter.get('/:id', findId)

/* diariesRouter.post('/', (_req: Request, res: Response) => {
}) */

export default diariesRouter

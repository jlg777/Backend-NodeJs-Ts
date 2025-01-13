import express, { Request, Response } from 'express'
import { getEntries } from '../services/diariesServices'

const diariesRouter = express.Router()

diariesRouter.get('/', (_req: Request, res: Response) => {
  const entries = getEntries()
  res.status(201).json(entries)
})

export default diariesRouter

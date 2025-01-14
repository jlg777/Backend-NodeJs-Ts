import express, { Request, Response } from 'express'
import { findId, getEntries } from '../services/diariesServices'

const diariesRouter = express.Router()

diariesRouter.get('/', (_req: Request, res: Response) => {
  const entries = getEntries()
  res.status(201).json(entries)
})

diariesRouter.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const entriesId = findId(Number(id))
  res.status(201).json(entriesId)
})

export default diariesRouter

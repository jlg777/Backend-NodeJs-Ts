import express from 'express'
import { addEntrie, findId, getEntries } from '../services/diariesServices'

const diariesRouter = express.Router()

diariesRouter.get('/', getEntries)

diariesRouter.get('/:id', findId)

diariesRouter.post('/', addEntrie)

export default diariesRouter

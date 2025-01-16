import express from 'express'
import { addEntrie, deleteId, findId, getEntries } from '../services/diariesServices'

const diariesRouter = express.Router()

diariesRouter.get('/', getEntries)

diariesRouter.get('/:id', findId)

diariesRouter.post('/', addEntrie)

diariesRouter.delete('/:id', deleteId)

export default diariesRouter

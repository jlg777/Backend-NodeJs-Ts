import express from 'express'
import { addEntrie, deleteId, findId, getEntries, updateId } from '../services/diariesServices'

const diariesRouter = express.Router()

diariesRouter.get('/', getEntries)

diariesRouter.get('/:id', findId)

diariesRouter.post('/', addEntrie)

diariesRouter.delete('/:id', deleteId)

diariesRouter.put('/:id', updateId)

export default diariesRouter

import { diariesEntry } from '../types'
import diariesData from '../mock/diariesData.json'
import { Request, Response } from 'express'

const diaries: diariesEntry[] = diariesData as diariesEntry[]

export const getEntries = (_req: Request, res: Response): void => {
  try {
    // const data: diariesEntry[] = diaries
    res.status(200).json(diaries)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error al consultar los cursos:', error)
      res.status(500).send(error.message)
    }
  }
}

export const findId = (req: Request, res: Response): void => {
  const { id } = req.params

  try {
    const entry = diaries.find(d => d.id === Number(id))
    if (entry == null) {
      return
    }
    const { comment, ...entryWithoutComment } = entry
    res.status(201).json(entryWithoutComment)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al consultar los cursos:', error)
      res.status(500).send(error.message)
    } else {
      console.error('Error desconocido:', error)
      res.status(500).send('Error desconocido')
    }
  }
}

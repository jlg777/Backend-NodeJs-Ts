import { diariesEntry, diarieWithoutId, visibility, weather } from '../types'
import diariesData from '../mock/diariesData.json'
import { Request, Response } from 'express'

const diaries: diariesEntry[] = diariesData as diariesEntry[]

export const getEntries = (_req: Request, res: Response): void => {
  try {
    console.log(diaries)
    res.status(200).json(diaries)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error al consultar los Diarios:', error)
      res.status(500).send(error.message)
    }
  }
}

export const findId = (req: Request, res: Response): void => {
  const { id } = req.params

  try {
    const entry = diaries.find(d => d.id === Number(id))
    if (entry == null) {
      res.status(404).send(`No se encuentra el id ${id}`)
      return
    }
    const { comment, ...entryWithoutComment } = entry
    res.status(201).json(entryWithoutComment)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al consultar los Diarios:', error)
      res.status(500).send(error.message)
    } else {
      console.error('Error desconocido:', error)
      res.status(500).send('Error desconocido')
    }
  }
}

export const addEntrie = (req: Request, res: Response): void => {
  try {
    const { date, weather, visibility, comment } = req.body
    if (typeof date !== 'string') {
      throw new Error('La fecha debe ser un string')
    }

    // Validar que la fecha siga el formato YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!dateRegex.test(date)) {
      throw new Error('La fecha debe tener el formato YYYY-MM-DD')
    }
    // Validar que 'date' sea una fecha válida
    const parsedDate = new Date(date)
    if (isNaN(parsedDate.getTime())) {
      throw new Error('La fecha proporcionada no es válida')
    }
    const validWeathers: weather[] = ['rainy', 'sunny', 'windy', 'cloudy']
    if (!validWeathers.includes(weather)) {
      throw new Error('El clima debe ser uno de los valores: rainy, sunny, windy, cloudy')
    }

    // Validación de 'visibility' como uno de los valores válidos
    const validVisibilities: visibility[] = ['good', 'ok', 'poor', 'bad']
    if (!validVisibilities.includes(visibility)) {
      throw new Error('La visibilidad debe ser uno de los valores: good, ok, poor, bad')
    }
    if (typeof comment !== 'string' || comment.length > 50) {
      throw new Error('El comentario debe ser un string de menos de 50 caracteres')
    }
    const newdata: diarieWithoutId = req.body
    const newEntries: diariesEntry = { id: diaries.length + 1, ...newdata }
    diaries.push(newEntries)
    res.status(201).json(newEntries)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al consultar los Diarios: ', error)
      res.status(500).send(error.message)
    } else {
      console.error('Error desconocido: ', error)
    }
  }
}

export const deleteId = (req: Request, res: Response): void => {
  const { id } = req.params

  try {
    const deleteEntri = diaries.findIndex(d => d.id === Number(id))
    if (deleteEntri === -1) {
      res.status(404).send(`No se encuentra el id ${id}`)
      return
    }
    diaries.splice(deleteEntri, 1)
    res.status(200).json({ message: `Diario con id ${id} eliminado correctamente`, diaries })
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error al consultar los Diarios:', error)
      res.status(500).send(error.message)
    } else {
      console.error('Error desconocido:', error)
      res.status(500).send('Error desconocido')
    }
  }
}

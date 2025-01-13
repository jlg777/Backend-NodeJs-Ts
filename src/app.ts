import express, { Request, Response } from 'express'
import diariesRouter from './routes/dariariesRoutes'

const app = express()

app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
res.send('Hola')
})

app.use('/api/diaries', diariesRouter)

export default app
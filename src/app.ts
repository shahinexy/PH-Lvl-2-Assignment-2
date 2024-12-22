import express, {Application, Request, Response} from 'express'
import cors from 'cors'
import { BookRouter } from './app/Book/book.route'
const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

// application router 
app.use('/api/vi/book', BookRouter)

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a)
})

export default app;
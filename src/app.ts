import express, {Application, Request, Response} from 'express'
import cors from 'cors'
import { BookRouter } from './app/Book/book.route'
import { OrderRouter } from './app/Order/oder.route'
const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

// application router 
app.use('/api/products', BookRouter)

app.use('/api/orders', OrderRouter)

app.use('*', (req, res) => {
  res.status(404).json({
      success: false,
      message: `Route ${req.originalUrl} not found`
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Book server is running"
  })
})

export default app;
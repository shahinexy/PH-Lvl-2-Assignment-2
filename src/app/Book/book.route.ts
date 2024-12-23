import express from 'express'
import { BookController } from './book.controller';


const router = express.Router();

router.post('/', BookController.createBook)

router.get('/', BookController.getBooks)

router.get('/:productId', BookController.getSingleBook)

router.put('/:productId', BookController.updateSingleBook)

router.delete('/:productId', BookController.deleteSingleBook)

export const BookRouter = router;
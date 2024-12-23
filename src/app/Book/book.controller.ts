import { Request, Response } from "express";
import { BookService } from "./book.service";


const createBook = async (req: Request, res: Response) =>{
    try {
        const {book: bookData} = req.body;

        const result = await BookService.createBookInDB(bookData)

        res.status(200).json({
            success: true,
            message: 'Book created successfully',
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: error
        })
    }
}

const getBooks = async (req: Request, res: Response) =>{
    try {

        const result = await BookService.getAllBooksFromDB()

        res.status(200).json({
            success: true,
            message: 'Book created successfully',
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: error
        })
    }
}

const getSingleBook = async (req: Request, res: Response) =>{
    try {
        const {productId} = req.params

        const result = await BookService.getSingleBookFromDB(productId)

        res.status(200).json({
            success: true,
            message: 'Book created successfully',
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: error
        })
    }
}

export const BookController = {
    createBook,
    getBooks,
    getSingleBook
}
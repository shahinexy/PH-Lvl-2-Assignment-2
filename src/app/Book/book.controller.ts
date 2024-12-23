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
            message: 'Gert All Books Successfully',
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
            message: 'Get The Book Successfully',
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

const updateSingleBook = async (req: Request, res: Response) =>{
    try {
        const {productId} = req.params;
        const updateData = req.body;

        const result = await BookService.updateSingleBookFromDB(productId, updateData)

        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
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

const deleteSingleBook = async (req: Request, res: Response) =>{
    try {
        const {productId} = req.params;

        const result = await BookService.deleteSingleBookFromDB(productId)

        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
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
    getSingleBook,
    updateSingleBook,
    deleteSingleBook
}
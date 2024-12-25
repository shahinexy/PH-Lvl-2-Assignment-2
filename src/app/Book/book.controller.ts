import { NextFunction, Request, Response } from "express";
import { BookService } from "./book.service";
import BookValidationSchema from "./book.validation";


const createBook = async (req: Request, res: Response) =>{
    try {
        const {book: bookData} = req.body;

        const validetData = BookValidationSchema.parse(bookData)

        const result = await BookService.createBookInDB(validetData)

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

const updateSingleBook = async (req: Request, res: Response): Promise<any> =>{
    try {
        const {productId} = req.params;
        const updateData = req.body;

        const book = await BookService.getSingleBookFromDB(productId)

        if(!book){
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            })
        }

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

const searchBook = async (req: Request, res: Response, next: NextFunction): Promise<any> =>{
    try {
        const {searchTerm} = req.query;

        if(!searchTerm || typeof searchTerm !== 'string'){
            return res.status(400).json({message: 'Search term is required'})
        }

        const result = await BookService.searchBookFromDB(searchTerm)

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No books found for the search term: "${searchTerm}"`,
            });
        }

        res.status(200).json({
            success: true,
            message: 'Searched books get successfully',
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: error
        })
        next(error)
    }
}

export const BookController = {
    createBook,
    getBooks,
    getSingleBook,
    updateSingleBook,
    deleteSingleBook,
    searchBook
}
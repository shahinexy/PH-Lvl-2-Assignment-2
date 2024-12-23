import { Book } from "./book.interface";
import { BookModle } from "./book.module";


const createBookInDB = async (bookData: Book) =>{
    const result = await BookModle.create(bookData)
    return result
}

const getAllBooksFromDB = async () =>{
    const result = await BookModle.find()
    return result;
}

const getSingleBookFromDB = async (productId: string) =>{
    const result = await BookModle.findOne({_id: productId})
    return result;
}

export const BookService = {
    createBookInDB,
    getAllBooksFromDB,
    getSingleBookFromDB
}
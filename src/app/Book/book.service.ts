import { Book } from "./book.interface";
import { BookModle } from "./book.module";


const createBookInDB = async (bookData: Book) =>{
    const result = await BookModle.create(bookData)
    return result
}

export const BookService = {
    createBookInDB
}
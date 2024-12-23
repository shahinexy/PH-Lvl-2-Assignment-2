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

const updateSingleBookFromDB = async (productId: string, updateData: Book) =>{
    const result = await BookModle.updateOne({_id: productId}, {$set: updateData});
    return result;
}

const deleteSingleBookFromDB = async (productId: string) =>{
    const result = await BookModle.findByIdAndDelete({_id: productId})
    return result;
}

const searchBookFromDB = async (searchTerm: string) =>{

    const regexSearchTerm = new RegExp(searchTerm as string, 'i')

    const result = await BookModle.find({
        $or: [
            {title: regexSearchTerm},
            {author: regexSearchTerm},
            {category: regexSearchTerm},
        ]
    })

    return result
}

export const BookService = {
    createBookInDB,
    getAllBooksFromDB,
    getSingleBookFromDB,
    updateSingleBookFromDB,
    deleteSingleBookFromDB,
    searchBookFromDB
}
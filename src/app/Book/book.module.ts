import { Schema, model } from 'mongoose';
import { Book } from './book.interface';

const bookSchema = new Schema<Book>({
    title: String,
    author: String,
    price: Number,
    category: {
        type: String,
        enum: [ 'Fiction' , 'Science' , 'SelfDevelopment' , 'Poetry' , 'Religious']
    },
    description: String,
    quantity: Number,
    inStock: {
        type: String,
        enum: ['Stock' , 'Stock Out']
    }
})
  

export const BookModle = model<Book>('Book', bookSchema);
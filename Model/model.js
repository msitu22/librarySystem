import mongoose from 'mongoose';

// Defining a mongoose schema for the Book model
const bookSchema = new mongoose.Schema({
    book_name: {
        required: true,
        type: String
    },
    author_name: {
        required: true,
        type: String
    },
    isbn: {
        required: true,
        type: Number
    },
    publisher: {
        required: true,
        type: String
    },
    published_year: {
        required: true,
        type: Number
    },
    quantity: {
        required: true,
        type: Number
    }
})

// Creating a mongoose model named 'Book' using the defined schema
// The model is associated with the 'Library_management' collection in the 'Library' database
export const Book = mongoose.model('Library',bookSchema,'Library_management');


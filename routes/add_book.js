import express from "express";
import { Book } from "../Model/model.js";
import { getLoggerInstance } from '../logger.js';

export const addBook = express.Router();
const logger = getLoggerInstance();

// Defining a route for handling POST requests to '/add'
addBook.post('/add', async (req, res) => {
  // Creating a new instance of the Book model with data from the request body
    const data = new Book({
        book_name: req.body.book_name,
        author_name: req.body.author_name,
        isbn: req.body.isbn,
        publisher: req.body.publisher,
        published_year: req.body.published_year,
        quantity: req.body.quantity
    })
  
    try {
       // Checking if the book with the given ISBN already exists
        if (data.isbn) {
          const book = await Book.findOne({ isbn: data.isbn });
          // If the book exists, add the quantity to the existing book and save
          if (book) {
            book.quantity += data.quantity;
            await book.save();
            logger.info(`Book already exists, added to existing book collection. Now this book has ${book.quantity} copies in stock.`);
            return res.status(409).json({
              message: `Book already exists, added to existing book collection. Now this book has ${book.quantity} copies in stock.`
            });
          }
        }
        // If the book does not exist, save the new book data to the database
        await data.save();
        res.status(200).json({ message: 'Book has been added', data });
        logger.info('Book has been added');
      } catch (error) {
        logger.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });
    



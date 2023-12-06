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
        // Checking if the book already exists in the database
        const book = await Book.findOne({ isbn: data.isbn });
        // If the book exists and author name is the same, add the quantity to the existing book and save
        if (book && book.book_name === data.book_name && book.author_name === data.author_name && book.publisher === data.publisher && book.published_year === data.published_year) {
          book.quantity += data.quantity;
          await book.save();
          logger.info(`Book already exists, added to existing book collection. Now this book has ${book.quantity} copies in stock.`);
          return res.status(409).json({
            message: `Book already exists, added to existing book collection. Now this book has ${book.quantity} copies in stock.`
          })
        } else if (book && book.book_name !== data.book_name || book.author_name !== data.author_name || book.publisher !== data.publisher || book.published_year !== data.published_year) {
          logger.error('Book already exists with different details');
          return res.status(409).json({
            message: 'Book already exists with different details'
          })
        }
      await data.save();
      res.status(200).json({ message: 'Book has been added', data });
      logger.info('Book has been added');
      } catch (error) {
        logger.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  );

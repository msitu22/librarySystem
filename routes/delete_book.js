import express from "express";
import { Book } from "../Model/model.js";
import { getLoggerInstance } from '../logger.js';

const logger = getLoggerInstance();
export const deleteBook = express.Router();

deleteBook.delete('/delete/:isbn', async (req, res) => {
    const isbn = req.params.isbn;
    try {
        const book = await Book.findOne({ isbn });

        if (!book) {
            logger.error(`Book with ISBN ${isbn} not found`);
            return res.status(404).json({ message: 'Book not found' });
            } else if (book.quantity > 1) {
                book.quantity -= 1;
                await book.save();
                logger.info(`Book exists in the database. Now this book has ${book.quantity} copies in stock.`);
                return res.status(200).json({
                  message: `Book exists in the database. Now this book has ${book.quantity} copies in stock.`
                });
            } else if (book.quantity === 1) {
                await Book.deleteOne({ isbn });
                logger.info(`Book with ISBN ${isbn} has been deleted`);
                return res.status(200).json({message: `Book has been deleted`});
            }
    } catch (error) {
        logger.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


import express from "express";
import { Book } from "../Model/model.js";
import { getLoggerInstance } from '../logger.js';

const logger = getLoggerInstance();
export const getBook = express.Router();

getBook.get('/get/:isbn', async (req, res) => {
    const isbn = req.params.isbn;
    try {
        const book = await Book.findOne({ isbn });

        if (!book) {
            logger.error(`Book with ISBN ${isbn} not found`);
            return res.status(404).json({ message: 'Book not found' });
            }
            logger.info(`Book with ISBN ${isbn} has been retrieved`);
            res.status(200).json({book});
    } catch (error) {
        logger.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
      

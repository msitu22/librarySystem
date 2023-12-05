import https from 'https';
import fs from 'fs';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { addBook } from './routes/add_book.js';
import { getBook } from './routes/get_book.js';
import { deleteBook } from './routes/delete_book.js';
import { getLoggerInstance } from './logger.js';

const port = 8080
const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

dotenv.config();
const logger = getLoggerInstance();
const app = express();

// Connecting to MongoDB using mongoose
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString, {});
const db = mongoose.connection;

// if connected, display a message
db.on('open', () => {  
    logger.info('Connected to MongoDB');
});
db.on('error', (error) => {
    logger.error(error);
});

const server = https.createServer(httpsOptions,app);

app.use(express.json()); // Middleware for parsing incoming JSON data from HTTP requests

// Using the addBook, getBook, and deleteBook routers in the application
app.use('/', addBook); 
app.use('/', getBook); 
app.use('/', deleteBook); 

// Serving static files from the 'public' directory
app.use(express.static('public'));
// Configuring the view engine as EJS
app.set('view engine', 'ejs');

// Setting up routes for different views for the web app frontend
app.get('/', (req, res) => {
    res.render('homeView');
});

app.get('/add-view', (req, res) => {
    res.render('addView');
  });

app.get('/get-view', (req, res) => {
    res.render('getView');
});

app.get('/delete-view', (req, res) => {
    res.render('deleteView');
});


server.listen(port, () => {
    logger.info(`Server is listening on ${port}`)
});


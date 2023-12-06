# Library System
## Intro
This guide will walk you through the process of using a library system that provides functionalities for adding, getting, and deleting books. The system is built using Express.js for the server, MongoDB for the database and Javascript for front-end.

## Prerequisites
Before you begin, make sure you have the following installed on your system:
- Node.js: The JavaScript runtime used to execute server-side code.
- MongoDB: The NoSQL database used to store book information.
- Environment Setup: Configure your development environment to make HTTPS requests to our API endpoints. Also need to install required dependencies.

## Environment Setup
Start a new Node.js project with below command line below and it will create a new package.json file for our project:
```
npm init
```

Install our Node.js dependencies:
- mongoose, ejs, express, luxon, nodemon, winston
```
npm install mongoose ejs express luxon nodemon winston
```

Initialize a `.env` file to store mongodb link.
Install the Dotenv to store mongodb link
```
npm i dotenv
```
Add the `.env` file on the root folder, then use the following format and fill up your API key
```
DATABASE_URL =  '<your-library-database>'
```
</br>

## Usage
### 1. Select a feature:
- There are 3 requests for this project. On the front-end home page, you will see three buttons, which are Add Book(post request), Get Book(get request) and Delete Book(delete request).
<img align="center" width=60% height=60% src="https://github.com/msitu22/librarySystem/assets/112602900/9236c2f8-94bd-4318-bbd4-786a291c84a6">


### 2. Add a book:
- To add a new book to the library, make a POST request to the /add endpoint with the required book details. On the front-end, the endpoint is /add-view
<img align="center" width=40% height=40% src="https://github.com/msitu22/librarySystem/assets/112602900/0e5b6e76-a68d-4f5d-80cc-4e65ac99d3ac">

- If the book is added successfully, you will see the mongoDB is updated with the new book as well
<img align="center" width=90% height=90% src="https://github.com/msitu22/librarySystem/assets/112602900/cf68262e-1a35-4e6b-90dc-fd15b80ce95a">

- If the book's isbn exsits in the database and all other book items are the same, new book already exists in the database and its quantity will be added to the inventory.
<img align="center" width=40% height=40% src="https://github.com/msitu22/librarySystem/assets/112602900/3bccd6a4-4ade-4f56-a97e-d536f15448cc">

- If the book's isbn exsits in the database but other book items is not, new book is not able to add because the new book isbn might be incorrect
<img align="center" width=40% height=40% src="https://github.com/msitu22/librarySystem/assets/112602900/41b5b63e-1bea-4aac-8a0e-7cad56db0b53">

### 3. Get a Book
- To retrieve information about a specific book by ISBN, make a GET request to the /get/:isbn endpoint. On the front-end, the endpoint is /get-view
<img align="center" width=40% height=40% src="https://github.com/msitu22/librarySystem/assets/112602900/cfd8de6b-d650-4046-afd0-45c6895e427b">

- If the isbn does not exist, the message "Book not found" will prompt.
<img align="center" width=40% height=40% src="https://github.com/msitu22/librarySystem/assets/112602900/26ae6774-aaf6-4f0b-948b-aca08a6f21e0">
 

### 4. Delete a Book
- To delete a book by ISBN, make a DELETE request to the /delete/:isbn endpoint. On the front-end, the endpoint is /delete-view
<img align="center" width=40% height=40% src="https://github.com/msitu22/librarySystem/assets/112602900/040b8652-36f7-45e8-8b02-148c93d8326f">

- If the isbn does not exist, the error message will prompt.
<img align="center" width=40% height=40% src="https://github.com/msitu22/librarySystem/assets/112602900/ba0f0d03-6f1c-481d-8a8e-38a4033ef266">

## Frontend Integration
This project provides simple HTML, EJS views, CSS and Javascript for the frontend.
- Home View: https://127.0.0.1:8080/
- Add Book View: https://127.0.0.1:8080/add-view
- Get Book View: https://127.0.0.1:8080/get-view
- Delete Book View: https://127.0.0.1:8080/delete-view


## Error Handling - logging
We will use Winston logging library to log information for error handling. I have implemented it in this app so whenever you run an API, you can view the logs in your terminal or command prompt while your Node.js application is running. 
![image](https://github.com/msitu22/librarySystem/assets/112602900/f937b3a2-9f0e-4584-969b-79ae4838a25d)

## Install SSL Certificates(Optional)
We are using HTTPS make request and below are the steps to install SSL certificates. SSL certificates allow web servers to encrypt their traffic, and also offer a mechanism to validate server identities to their visitors. Websites using SSL are accessed via the https:// protocol.

- Generating a CSR 
```
openssl genrsa -out key.pem
```

- Generating a Private Key
```
openssl req -new -key key.pem -out csr.pem
```

- Installing a Certificate On Your Server
```
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
```

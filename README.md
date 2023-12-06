# librarySystem
# librarySystem

## Prerequisites
Mke sure you have the following prerequisites in place:
- Access Credentials: You need to obtain MongoDB link in the MongoDB site
- Environment Setup: Configure your development environment to make HTTPS requests to our API endpoints. Also need to install required dependencies.

## Environment Setup
Start a new Node.js project with below command line below and it will create a new package.json file for our project:
```
npm init
```

Install our Node.js dependencies:
- mongoose
```
npm i mongoose
```
- ejs
```
npm i ejs
```
- Express
```
npm install express
```
- Luxon
```
npm i luxon
```
- Nodemon
```
npm i nodemon
```
- Winston
```
npm i winston
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
![image](https://github.com/msitu22/librarySystem/assets/112602900/9236c2f8-94bd-4318-bbd4-786a291c84a6)


### 2. Add a book:
- To add a new book to the library, make a POST request to the /add endpoint with the required book details. On the front-end, the endpoint is /add-view
![image](https://github.com/msitu22/librarySystem/assets/112602900/0e5b6e76-a68d-4f5d-80cc-4e65ac99d3ac)
- If the book is added successfully, you will see the mongoDB is updated with the new book as well
![image](https://github.com/msitu22/librarySystem/assets/112602900/cf68262e-1a35-4e6b-90dc-fd15b80ce95a)

### 3. Get a Book
- To retrieve information about a specific book by ISBN, make a GET request to the /get/:isbn endpoint. On the front-end, the endpoint is /get-view

### 4. Delete a Book
- To delete a book by ISBN, make a DELETE request to the /delete/:isbn endpoint. On the front-end, the endpoint is /delete-view




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

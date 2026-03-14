const axios = require("axios");

// Task 11 - Get all books
async function getAllBooks() {
    try {
        const response = await axios.get("http://localhost:5000/");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Get books by author
async function getBookByAuthor(author) {
    try {
        const response = await axios.get(`http://localhost:5000/author/${author}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Get books by title
async function getBookByTitle(title) {
    try {
        const response = await axios.get(`http://localhost:5000/title/${title}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBookByAuthor,
    getBookByTitle
};
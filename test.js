const axios = require("axios");

async function getBooks() {
    try {
        const response = await axios.get("http://localhost:5000/books");
        console.log("Books list:");
        console.log(response.data);
    } catch (error) {
        console.log("Error retrieving books:", error.message);
    }
}

getBooks();
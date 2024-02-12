const express = require("express");
const router = express.Router();

const books = [];

// Route to get all books
router.get("/books", (req, res) => {
  res.json(books);
});


// Route to get a specific book by ID
router.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});


// Route to create a new book
router.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});


// Route to delete a book by ID
router.delete("/books/:id", (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.json(deletedBook);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});


module.exports = router;
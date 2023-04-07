const express = require("express");
const router = express.Router();

const bookController = require("../contollers/book.controller");

/**
 *  route to get all books from collection
 *
 * url syntax - http://localhost:8082/book-house/books/
 *
 */

router.get("/", bookController.getAllBooks);

/**
 *  route to get  book by id
 *
 * url syntax - http://localhost:8082/book-house/books/:id
 *
 */
router.get("/:id", bookController.getBookByID);

/**
 *  route create new book record
 *
 * url syntax - http://localhost:8082/book-house/books/
 *
 */
router.post("", bookController.addBook);

/**
 *  route to update book data
 *
 * url syntax - http://localhost:8082/book-house/books/:id
 *
 */
router.put("/:id", bookController.updateBook);

/**
 *  route to delete book data
 *
 * url syntax - http://localhost:8082/book-house/books/:id
 *
 */
router.delete("/:id", bookController.deleteBook);

module.exports = router;

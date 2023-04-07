const express = require("express");
const router = express.Router();

const commonController = require("../contollers/common.controller");

/**
 *  route to get all book details from collection
 *
 * url syntax - http://localhost:8082/book-house/getAllBook/
 *
 */

router.get("/getbook", commonController.getAllBookDetails);

/**
 *  route to get  author by id
 *
 * url syntax - http://localhost:8082/book-house/authors/:id
 *
 */
// router.get("/:id", authorController.getDataByID);

/**
 *  route create new book with author detail record
 *
 * url syntax - http://localhost:8082/book-house/addbook
 *
 * json data example to add one book -
 * {
        "Book_Name": "worder law",
        "Authors": ["Author1", "Author2"]
    }
 */
router.post("/addbook", commonController.addBookData);

/**
 *  route to update author data
 *
 * url syntax - http://localhost:8082/book-house/author/:id
 *
 */
// router.put("/:id", authorController.updateData);

/**
 *  route to delete author data
 *
 * url syntax - http://localhost:8082/book-house/authors/:id
 *
 */
// router.delete("/:id", authorController.deleteData);

module.exports = router;

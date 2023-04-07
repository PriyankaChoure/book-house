const express = require("express");
const router = express.Router();

const authorController = require("../contollers/author.controller");

/**
 *  route to get all authors from collection
 *
 * url syntax - http://localhost:8082/book-house/authors/
 *
 */

router.get("/", authorController.getAllData);

/**
 *  route to get  author by id
 *
 * url syntax - http://localhost:8082/book-house/authors/:id
 *
 */
router.get("/:id", authorController.getDataByID);

/**
 *  route create new author record
 *
 * url syntax - http://localhost:8082/book-house/authors/
 *
 */
router.post("/", authorController.addData);

/**
 *  route to update author data
 *
 * url syntax - http://localhost:8082/book-house/author/:id
 *
 */
router.put("/:id", authorController.updateData);

/**
 *  route to delete author data
 *
 * url syntax - http://localhost:8082/book-house/authors/:id
 *
 */
router.delete("/:id", authorController.deleteData);

module.exports = router;

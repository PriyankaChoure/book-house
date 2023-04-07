const express = require("express");
const router = express.Router();

const bookRoute = require("./book.route");
const authorRoute = require("./author.route");

router.use("/books", bookRoute);
router.use("/authors", authorRoute);

module.exports = router;

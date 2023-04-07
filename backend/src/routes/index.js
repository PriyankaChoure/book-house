const express = require("express");
const router = express.Router();

const bookRoute = require("./book.route");

router.use("/books", bookRoute);

module.exports = router;

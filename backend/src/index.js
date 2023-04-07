const Db = require("./services/book.service");
const Book = require("./models/book.model");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/book-house", routes);

var port = process.env.PORT || 8090;
app.listen(port, () => {
  console.log("Library API is runnning at " + port);
});

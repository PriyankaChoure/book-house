const httpStatus = require("http-status");
const { v4: uuidv4 } = require("uuid");

const bookService = require("../services/book.service");

const getAllBooks = async (req, res) => {
  try {
    const allBookList = await bookService.getAllBooks();
    console.log("total books - ", allBookList);
    if (!allBookList) {
      throw Error(httpStatus.NOT_FOUND);
    }

    res.status(httpStatus.CREATED).json(allBookList);
  } catch (e) {
    console.log(e);
  }
};

const getBookByID = async (req, res) => {
  try {
    const allBookList = await bookService.getBookByID(req.params.id);
    console.log("total books - ", allBookList);
    if (!allBookList) {
      throw Error(httpStatus.NOT_FOUND);
    }

    res.status(httpStatus.CREATED).json(allBookList);
  } catch (e) {
    console.log(e);
  }
};

const addBook = async (req, res) => {
  try {
    const id = uuidv4();
    const bodyData = req.body;
    const isEmpty = Object.values(bodyData).every(
      (x) => x === null || x === ""
    );
    if (isEmpty) {
      res.status(httpStatus.BAD_REQUEST).json(" value can not be empty");
    }
    const book = { Book_Id: id, ...bodyData };
    console.log(book);
    const createBook = await bookService.addBook(book);
    console.log("in controller book  - ", createBook);
    if (!createBook) {
      throw Error(httpStatus.NOT_FOUND);
    }

    res.status(httpStatus.CREATED).json(createBook);
  } catch (e) {
    console.log(e);
  }
};

const updateBook = async (req, res) => {
  try {
    const bodyData = req.body;
    const isEmpty = Object.values(bodyData).every(
      (x) => x === null || x === ""
    );
    if (isEmpty) {
      res.status(httpStatus.BAD_REQUEST).json(" value can not be empty");
    }

    const updateBook = await bookService.updateBook(req.params.id, bodyData);
    console.log("in controller book  - ", updateBook);
    if (!updateBook) {
      throw Error(httpStatus.NOT_FOUND);
    }
    res.status(httpStatus.CREATED).json(updateBook);
  } catch (e) {
    console.log(e);
  }
};

const deleteBook = async (req, res) => {
  try {
    console.log("book id to delete - ", req.params.id);
    await bookService.deleteBook(req.params.id);

    res.status(httpStatus.CREATED).json("Book Deleted Successfully");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllBooks,
  getBookByID,
  addBook,
  updateBook,
  deleteBook,
};

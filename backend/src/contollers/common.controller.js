const httpStatus = require("http-status");
const { v4: uuidv4 } = require("uuid");

const bookService = require("../services/book.service");
const authorService = require("../services/author.service");
const commonService = require("../services/common.service");

/**
 * method to add book details and its author name
 * @param {*} req
 * @param {*} res
 *
 */
const addBookData = async (req, res) => {
  try {
    // add data to book table
    const id = uuidv4();
    const bodyData = req.body;
    const isEmpty = Object.values(bodyData).every(
      (x) => x === null || x === ""
    );
    if (isEmpty) {
      res.status(httpStatus.BAD_REQUEST).json(" value can not be empty");
    }
    const bookData = { Book_Id: id, ...bodyData };
    console.log("Book Data - ", bookData);
    const bookID = await bookService.addBook(bookData);
    console.log("in controller BookId  - ", bookID);

    // add data to author table
    console.log("Authors list -", bodyData.Authors);
    bodyData.Authors.forEach(async (author) => {
      const id = uuidv4();
      const authorData = { Author_Id: id, Author_Name: author };
      console.log("in common controller - ", authorData);
      const authorID = await authorService.addData(authorData);
      console.log("in controller author  - ", authorID);

      // add data to book_author table
      commonService.addData(bookID, authorID);
    });

    res.status(httpStatus.CREATED).json(bookID);
  } catch (e) {
    console.log(e);
  }
};

const getAllBookDetails = async (req, res) => {
  try {
    const dataList = await commonService.getAllBooksDetails();
    console.log("total Books - ", dataList.length);
    if (!dataList) {
      throw Error(httpStatus.NOT_FOUND);
    }

    res.status(httpStatus.CREATED).json(dataList);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  addBookData,
  getAllBookDetails,
};

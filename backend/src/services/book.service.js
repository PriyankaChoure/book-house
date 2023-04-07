const config = require("../config/dbconfig");
const Book = require("../models/book.model");
const sql = require("mssql");

// fetch all book data
async function getAllBooks() {
  try {
    let pool = await sql.connect(config);
    let books = await pool.request().query("SELECT * from Books");
    console.log("in service books - ", books);
    return books.recordset;
  } catch (error) {
    console.log(error);
  }
}

// fetch book by ID
async function getBookByID(id) {
  try {
    let pool = await sql.connect(config);
    let books = await pool
      .request()
      .query(`SELECT * from Books where Book_Id = ${id}`);
    console.log("in service book - ", books);
    return books.recordset;
  } catch (error) {
    console.log(error);
  }
}

// Add new book
async function addBook(book) {
  try {
    const reqUrl = `INSERT INTO Books ( Book_Id, Book_name) values ('${book.Book_Id}','${book.Book_Name}')`;
    console.log(reqUrl);
    let pool = await sql.connect(config);
    let createdBook = await pool.request().query(reqUrl);
    console.log("in service book - ", createdBook);
    return book.Book_Id;
  } catch (error) {
    console.log(error);
  }
}

// update  book value
async function updateBook(id, book) {
  try {
    const reqUrl = `UPDATE Books SET Book_Name = '${book.Book_Name}' WHERE Book_Id='${id}'`;
    console.log(reqUrl);
    let pool = await sql.connect(config);
    let updatedBook = await pool.request().query(reqUrl);
    console.log("in service book - ", updatedBook);
    return id;
  } catch (error) {
    console.log(error);
  }
}

// update  book value
async function deleteBook(id) {
  try {
    const reqUrl = `DELETE FROM Books WHERE Book_Id='${id}'`;
    console.log(reqUrl);
    let pool = await sql.connect(config);
    let updatedBook = await pool.request().query(reqUrl);
    console.log("in service book - ", updatedBook);
    return id;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getAllBooks,
  getBookByID,
  addBook,
  updateBook,
  deleteBook,
};

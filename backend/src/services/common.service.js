const config = require("../config/dbconfig");
const sql = require("mssql");
const { v4: uuidv4 } = require("uuid");

// Add new record
async function addData(bookId, authorId) {
  try {
    const id = uuidv4();
    const reqUrl = `INSERT INTO Book_Author ( Id, Book_Id,Author_Id) values ('${id}','${bookId}', '${authorId}')`;
    console.log(reqUrl);
    let pool = await sql.connect(config);
    let reponseData = await pool.request().query(reqUrl);
    console.log("in service Author - ", reponseData);
    return id;
  } catch (error) {
    console.log(error);
  }
}

// get all details of books

async function getAllBooksDetails() {
  try {
    let pool = await sql.connect(config);
    const queryStr = `SELECT Books.*, Authors.Author_Name
    FROM Books
    JOIN Book_Author ON Books.Book_Id = Book_Author.Book_Id
    JOIN Authors ON Book_Author.Author_Id = Authors.Author_Id`;
    console.log(queryStr);
    let books = await pool.request().query(queryStr);
    console.log("in service books - ", books);
    return books.recordset;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addData,
  getAllBooksDetails,
};

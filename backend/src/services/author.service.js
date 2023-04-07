const config = require("../config/dbconfig");
const sql = require("mssql");

// fetch all book data
async function getAllData() {
  try {
    let pool = await sql.connect(config);
    let reponseData = await pool.request().query("SELECT * from Authors");
    console.log("in service  - ", reponseData);
    return reponseData.recordset;
  } catch (error) {
    console.log(error);
  }
}

// fetch book by ID
async function getDataByID(id) {
  try {
    let pool = await sql.connect(config);
    let reponseData = await pool
      .request()
      .query(`SELECT * from Authors where Author_Id = ${id}`);
    console.log("in service  - ", reponseData);
    return reponseData.recordset;
  } catch (error) {
    console.log(error);
  }
}

// Add new book
async function addData(author) {
  try {
    const reqUrl = `INSERT INTO Authors ( Author_Id, Author_Name) values ('${author.Author_Id}','${author.Author_Name}')`;
    console.log(reqUrl);
    let pool = await sql.connect(config);
    let reponseData = await pool.request().query(reqUrl);
    console.log("in service Author - ", reponseData);
    return author.Author_Id;
  } catch (error) {
    console.log(error);
  }
}

// update  book value
async function updateData(id, reqData) {
  try {
    const reqUrl = `UPDATE Authors SET Author_Name = '${reqData.Author_Name}' WHERE Author_Id='${id}'`;
    console.log(reqUrl);
    let pool = await sql.connect(config);
    let updatedResponse = await pool.request().query(reqUrl);
    console.log("in service book - ", updatedResponse);
    return id;
  } catch (error) {
    console.log(error);
  }
}

// update  book value
async function deleteData(id) {
  try {
    const reqUrl = `DELETE FROM Authors WHERE Author_Id='${id}'`;
    console.log(reqUrl);
    let pool = await sql.connect(config);
    let deleteResponse = await pool.request().query(reqUrl);
    console.log("in service  - ", deleteResponse);
    return id;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getAllData,
  getDataByID,
  addData,
  updateData,
  deleteData,
};

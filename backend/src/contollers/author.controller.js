const httpStatus = require("http-status");
const { v4: uuidv4 } = require("uuid");

const authorService = require("../services/author.service");

const getAllData = async (req, res) => {
  try {
    const dataList = await authorService.getAllData();
    console.log("total authors - ", dataList.length);
    if (!dataList) {
      throw Error(httpStatus.NOT_FOUND);
    }

    res.status(httpStatus.CREATED).json(dataList);
  } catch (e) {
    console.log(e);
  }
};

const getDataByID = async (req, res) => {
  try {
    const responseData = await authorService.getDataByID(req.params.id);
    console.log("author - ", responseData);
    if (!responseData) {
      throw Error(httpStatus.NOT_FOUND);
    }

    res.status(httpStatus.CREATED).json(responseData);
  } catch (e) {
    console.log(e);
  }
};

const addData = async (req, res) => {
  try {
    const id = uuidv4();
    const bodyData = req.body;
    const isEmpty = Object.values(bodyData).every(
      (x) => x === null || x === ""
    );
    if (isEmpty) {
      res.status(httpStatus.BAD_REQUEST).json(" value can not be empty");
    }
    const author = { Author_Id: id, ...bodyData };
    console.log(author);
    const responseData = await authorService.addData(author);
    console.log("in controller author  - ", responseData);
    if (!responseData) {
      throw Error(httpStatus.NOT_FOUND);
    }

    res.status(httpStatus.CREATED).json(responseData);
  } catch (e) {
    console.log(e);
  }
};

const updateData = async (req, res) => {
  try {
    const bodyData = req.body;
    const isEmpty = Object.values(bodyData).every(
      (x) => x === null || x === ""
    );
    if (isEmpty) {
      res.status(httpStatus.BAD_REQUEST).json(" value can not be empty");
    }

    const responseData = await authorService.updateData(
      req.params.id,
      bodyData
    );
    console.log("in controller   - ", responseData);
    if (!responseData) {
      throw Error(httpStatus.NOT_FOUND);
    }
    res.status(httpStatus.CREATED).json(responseData);
  } catch (e) {
    console.log(e);
  }
};

const deleteData = async (req, res) => {
  try {
    console.log("author id to delete - ", req.params.id);
    await authorService.deleteData(req.params.id);

    res.status(httpStatus.CREATED).json("Author Deleted Successfully");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllData,
  getDataByID,
  addData,
  updateData,
  deleteData,
};

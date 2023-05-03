const { connection } = require('../model/db')

const getAllCategories = async (req, res) => {
  try {
    const SqlQuery = `SELECT * FROM category`;
    // console.log(SqlQuery)
    await connection.query(SqlQuery, (err, result) => {
      console.log(result)
      if (err) {
        res.send({ status: 400, Error: err.message })
      }
      res.send({ status: 200, response: result })
    });
  } catch (error) {
    res.send({ status: 400, Error: error.message })
  }
}
const getSingleCategories = async (req, res) => {
  const id = req.query.category_id
  console.log(category_id)
  try {
    const SqlQuery = `SELECT * FROM category WHERE category_id = ${id}`;
    await connection.query(SqlQuery, (err, result) => {
      if (err) {
        res.send({ status: 400, Error: err.message })
      }
      res.send({ status: 200, response: result })
    });
  } catch (error) {
    res.send({ status: 400, Error: error.message })
  }
}

const createCategories = async (req, res) => {
  const data = req.body
  try {

    const SqlQuery = `INSERT INTO category SET ?`;
    await connection.query(SqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, Error: err.message })
      }
      res.send({ status: 200, response: result })
    });
  } catch (error) {
    res.send({ status: 400, Error: error.message })
  }
}

const updateCategories = async (req, res) => {
  const id = req.params.category_id
  try {
    const data = req.body;
    const SqlQuery = `UPDATE category SET ? WHERE category_id = ?`;
    console.log(Sql)
    await connection.query(SqlQuery, [data, id], (err, result) => {
      if (err) {
        res.send({ status: 400, Error: err.message })
      }
      res.send({ status: 200, response: result })
    });
  } catch (error) {
    res.send({ status: 400, Error: error.message })
  }
}

const deleteCategories = async (req, res) => {
  const id = req.query.category_id
  try {
    const SqlQuery = `DELETE FROM category WHERE category_id = ${id}`;
    await connection.query(SqlQuery, (err, result) => {
      if (err) {
        res.send({ status: 400, Error: err.message })
      }
      res.send({ status: 200, response: result })
    });
  } catch (error) {
    res.send({ status: 400, Error: error.message })
  }
}
module.exports = { getAllCategories, getSingleCategories, createCategories, updateCategories, deleteCategories }
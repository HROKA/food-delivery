const connection = require('../config/connection');

const query = {
  // get all Products
  getAllProducts: () => connection.query('SELECT * FROM products'),

  // delete product by id
  deleteProduct: (id) =>
    connection.query(`DELETE FROM products WHERE id = $1;`, [id]),
};

module.exports = query;

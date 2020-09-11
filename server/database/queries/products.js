const connection = require('../config/connection');

const query = {
  getAllProducts: () => connection.query('SELECT * FROM products'),
  deleteProduct: (id) =>
    connection.query(`DELETE FROM products WHERE id = $1;`, [id]),
};

module.exports = query;

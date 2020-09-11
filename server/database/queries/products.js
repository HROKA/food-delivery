const connection = require('../config/connection');

const query = {
  getAllProducts: () => connection.query('SELECT * FROM products'),
};

module.exports = query;

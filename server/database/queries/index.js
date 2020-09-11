const connection = require('../config/connection');

const query = {
  // get all orders
  getAllOrders: () => connection.query('SELECT * FROM orders;'),

  // delete order by id
  deleteOrderById: (id) =>
    connection.query(`DELETE FROM orders WHERE id = $1;`, [id]),

  // delete order by id
  deleteDetailsByOrderId: (id) =>
    connection.query(`DELETE FROM details WHERE order_id = $1;`, [id]),

  // get all products
  getAllProducts: () => connection.query('SELECT * FROM products'),
};

module.exports = query;

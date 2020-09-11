const connection = require('../config/connection');

const query = {
  // get all orders
  getAllOrders: () => connection.query('SELECT * FROM orders;'),

  // delete order by id
  getOrderById: (id) =>
    connection.query(`SELECT * FROM orders WHERE id = $1;`, [id]),

  // delete order by id
  deleteOrderById: (id) =>
    connection.query(`DELETE FROM orders WHERE id = $1;`, [id]),
};

module.exports = query;

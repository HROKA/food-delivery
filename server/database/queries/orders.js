/* eslint-disable camelcase */
const connection = require('../config/connection');

const query = {
  // get all orders
  getAllOrders: () => connection.query('SELECT * FROM orders;'),

  // delete order by id
  deleteOrderById: (id) =>
    connection.query(`DELETE FROM orders WHERE id = $1;`, [id]),

  // add new order
  addNewOrder: (
    client_id,
    total,
    order_price,
    address,
    mobile_number,
    delivery_price
  ) =>
    connection.query(
      ` Insert Into  orders
    (client_id,total,order_price,address,mobile_number,delivery_price)
  VALUES ($1, $2, $3, $4, $5, $6)`,
      [client_id, total, order_price, address, mobile_number, delivery_price]
    ),
};

module.exports = query;

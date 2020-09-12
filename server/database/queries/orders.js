/* eslint-disable camelcase */
const connection = require('../config/connection');

const query = {
  // get all orders
  getAllOrders: () =>
    connection.query('SELECT * FROM orders order by date desc;'),

  // get order by id
  getOrderById: (id) =>
    connection.query(`SELECT * FROM orders WHERE id = $1;`, [id]),

  // get client orders
  getClient_Orders: (client_id) =>
    connection.query(`SELECT * FROM orders WHERE client_id = $1;`, [client_id]),

  // delete order by id
  deleteOrderById: (id) =>
    connection.query(`DELETE FROM orders WHERE id = $1;`, [id]),

  // delete client order
  deleteClient_Order: (id, client_id) =>
    connection.query(`DELETE FROM orders WHERE id = $1 and client_id = $2;`, [
      id,
      client_id,
    ]),

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

/* eslint-disable camelcase */
const connection = require('../config/connection');

const query = {
  // delete order by id
  deleteDetailsByOrderId: (order_id) =>
    connection.query(`DELETE FROM details WHERE order_id = $1;`, [order_id]),
};

module.exports = query;

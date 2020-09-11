const connection = require('../config/connection');

const query = {
  // delete order by id
  deleteDetailsByOrderId: (id) =>
    connection.query(`DELETE FROM details WHERE order_id = $1;`, [id]),
};

module.exports = query;

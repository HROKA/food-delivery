/* eslint-disable camelcase */
const connection = require('../config/connection');

const clientQuery = {
  // get client data
  getClient_Data: (id) =>
    connection.query('SELECT * FROM clients WHERE id = $1;', [id]),
};

module.exports = clientQuery;

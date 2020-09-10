const connection = require('../../config/connection');

const getAllOrders = () => connection.query('SELECT * FROM orders;');

module.exports = getAllOrders;

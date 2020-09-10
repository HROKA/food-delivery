const { getAllOrders } = require('../../../database/queries/orders');

const allOrders = (req, res, next) => {
  getAllOrders()
    .then(({ rows }) => res.json(rows))
    .catch(next);
};

module.exports = allOrders;

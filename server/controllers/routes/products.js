const { getAllProducts } = require('../../database/queries/products');

const products = {
  getAllProducts: (req, res, next) =>
    getAllProducts()
      .then(({ rows }) => res.status(200).json(rows))
      .catch(next),
};

module.exports = products;

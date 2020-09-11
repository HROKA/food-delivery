const { getAllProducts } = require('../../database/queries');

const products = {
  getAllProducts: (req, res) =>
    getAllProducts()
      .then(({ rows }) => res.status(200).json(rows))
      .catch((err) => res.status(400).json({ message: 'Bad request', err })),
};

module.exports = products;

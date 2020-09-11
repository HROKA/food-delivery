const {
  getAllProducts,
  deleteProduct,
} = require('../../database/queries/products');

const products = {
  // get all products
  getAllProducts: (req, res, next) =>
    getAllProducts()
      .then(({ rows }) => res.status(200).json(rows))
      .catch(next('failed to get products')),

  // delete product with id
  deleteProduct: (req, res, next) => {
    const { id } = req.params;
    deleteProduct(id)
      .then(() =>
        res
          .status(200)
          .json({ message: `Product ${id} was deleted successfully` })
      )
      .catch(next('Product has been used in orders'));
  },
};

module.exports = products;

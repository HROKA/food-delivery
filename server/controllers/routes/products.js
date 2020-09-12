const {
  getAllProducts,
  getProductByID,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../../database/queries/products');

const products = {
  // get all products
  getAllProducts: (req, res, next) =>
    getAllProducts()
      .then(({ rows }) => res.status(200).json(rows))
      .catch(() => next('Failed to get products')),

  // get product by id
  getProductByID: (req, res, next) => {
    const { id } = req.params;
    getProductByID(id)
      .then(({ rows }) => res.status(200).json(rows))
      .catch(() => next('Failed to get the product'));
  },

  // add new products
  addProduct: (req, res, next) =>
    addProduct(req.body)
      .then(() =>
        res.status(200).json({ message: 'Product added successfully' })
      )
      .catch(() => next('Failed to add product')),

  // update product by id
  updateProduct: (req, res, next) => {
    const { id } = req.params;
    updateProduct({ id, ...req.body })
      .then(() =>
        res.status(200).json({ message: 'Product updated successfully' })
      )
      .catch(() => next('Failed to update product'));
  },

  // delete product with id
  deleteProduct: (req, res, next) => {
    const { id } = req.params;
    deleteProduct(id)
      .then(() =>
        res
          .status(200)
          .json({ message: `Product ${id} was deleted successfully` })
      )
      .catch(() => next('Product has been used in orders'));
  },
};

module.exports = products;

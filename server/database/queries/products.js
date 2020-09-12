/* eslint-disable camelcase */
const connection = require('../config/connection');

const productsQueries = {
  // get all Products
  getAllProducts: () => connection.query('SELECT * FROM products'),

  // add new Products
  addProduct: ({
    name,
    unit,
    price,
    image,
    discount_value,
    available,
    category,
  }) =>
    connection.query(
      `
      Insert Into products (
        name,
        unit,
        price,
        image,
        discount_value,
        available,
        category
      )
    VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7::text[]
      );`,
      [name, unit, price, image, discount_value, available, category]
    ),

  // delete product by id
  deleteProduct: (id) =>
    connection.query(`DELETE FROM products WHERE id = $1;`, [id]),
};

module.exports = productsQueries;

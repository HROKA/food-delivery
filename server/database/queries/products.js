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

  // update Product by id
  updateProduct: ({
    id,
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
        UPDATE products SET 
          name = $1,
          unit = $2,
          price = $3,
          image = $4,
          discount_value = $5,
          available = $6,
          category = $7
       where id=$8;`,
      [name, unit, price, image, discount_value, available, category, id]
    ),

  // delete product by id
  deleteProduct: (id) =>
    connection.query(`DELETE FROM products WHERE id = $1;`, [id]),
};

module.exports = productsQueries;

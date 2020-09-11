/* eslint-disable camelcase */
const {
  getAllOrders,
  deleteOrderById,
  addNewOrder,
} = require('../../database/queries/orders');
const { deleteDetailsByOrderId } = require('../../database/queries/details');

const products = {
  // get all orders
  AllOrders: (req, res) =>
    getAllOrders()
      .then(({ rows }) => res.status(200).json(rows))
      .catch((err) => res.status(400).json({ message: 'Bad request', err })),

  // delete order by id
  deleteOrderbyId: (req, res) => {
    const id = req.url.split('/')[2];
    deleteDetailsByOrderId(id).then(() => {
      deleteOrderById(id)
        .then(() => res.status(200).json({ message: 'delete successful' }))
        .catch((err) => res.status(400).json({ message: 'Bad request', err }));
    });
  },

  // create new order
  createOrder: (req, res) => {
    const {
      client_id,
      total,
      order_price,
      address,
      mobile_number,
      delivery_price,
    } = req.body;
    addNewOrder(
      client_id,
      total,
      order_price,
      address,
      mobile_number,
      delivery_price
    )
      .then(() =>
        res.status(200).json({ message: 'order was added successfully' })
      )
      .catch((err) => res.status(400).json({ message: 'Bad request', err }));
  },
};

module.exports = products;

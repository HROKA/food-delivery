/* eslint-disable camelcase */
const {
  getAllOrders,
  deleteOrderById,
  addNewOrder,
  getOrderById,
  getClient_Orders,
  deleteClient_Order,
} = require('../../database/queries/orders');

const {
  deleteDetailsByOrderId,
} = require('../../database/queries/order_details');

const products = {
  // get all orders
  AllOrders: (req, res, next) =>
    getAllOrders()
      .then(({ rows }) => res.status(200).json(rows))
      .catch(() => next('failed to get orders')),

  // get order by id
  orderById: (req, res, next) => {
    const { id } = req.params;
    getOrderById(id)
      .then(({ rows }) => res.status(200).json(rows))
      .catch(() => next(`failed to get order by id ${id}`));
  },

  // get client orders
  getClientOrders: (req, res, next) => {
    const { client_id } = req.body;
    getClient_Orders(client_id)
      .then(({ rows }) => res.status(200).json(rows))
      .catch(() => next('failed to get orders'));
  },

  // delete order by id
  deleteOrderbyId: (req, res, next) => {
    const { id } = req.params;
    deleteDetailsByOrderId(id)
      .then(() => {
        deleteOrderById(id).then(() =>
          res
            .status(200)
            .json({ message: `Order ${id} was deleted successfully` })
        );
      })
      .catch(() => next('Order has been used in details'));
  },

  // delete client order
  deleteClientOrder: (req, res, next) => {
    const { id, client_id } = req.body;
    deleteDetailsByOrderId(id)
      .then(() => {
        deleteClient_Order(id, client_id).then(() =>
          res
            .status(200)
            .json({ message: `Order ${id} was deleted successfully` })
        );
      })
      .catch(() => next('Order delete failed'));
  },

  // create new order
  createOrder: (req, res, next) => {
    addNewOrder(req.body)
      .then(() =>
        res.status(200).json({ message: 'order was added successfully' })
      )
      .catch(() => next('create order failed'));
  },
};

module.exports = products;

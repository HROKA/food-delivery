/* eslint-disable camelcase */
const {
  getAllOrders,
  deleteOrderById,
  addNewOrder,
  getOrderById,
  getClient_Orders,
  deleteClient_Order,
} = require('../../database/queries/orders');

const { deleteDetailsByOrderId } = require('../../database/queries/details');

const products = {
  // get all orders
  AllOrders: (req, res) =>
    getAllOrders()
      .then(({ rows }) => res.status(200).json(rows))
      .catch((err) =>
        res.status(400).json({ message: 'failed to get orders', err })
      ),

  // get order by id
  orderById: (req, res) => {
    const { id } = req.params;
    getOrderById(id)
      .then(({ rows }) => res.status(200).json(rows))
      .catch((err) =>
        res
          .status(400)
          .json({ message: `failed to get order by id ${id}`, err })
      );
  },

  // get client orders
  getClientOrders: (req, res) => {
    const { client_id } = req.body;
    getClient_Orders(client_id)
      .then(({ rows }) => res.status(200).json(rows))
      .catch((err) =>
        res.status(400).json({ message: 'failed to get orders', err })
      );
  },

  // delete order by id
  deleteOrderbyId: (req, res) => {
    const { id } = req.params;
    deleteDetailsByOrderId(id)
      .then(() => {
        deleteOrderById(id).then(() =>
          res
            .status(200)
            .json({ message: `Order ${id} was deleted successfully` })
        );
      })
      .catch((err) =>
        res.status(400).json({ message: 'Order has been used in details', err })
      );
  },

  // delete client order
  deleteClientOrder: (req, res) => {
    const { id, client_id } = req.body;
    deleteDetailsByOrderId(id)
      .then(() => {
        deleteClient_Order(id, client_id).then(() =>
          res
            .status(200)
            .json({ message: `Order ${id} was deleted successfully` })
        );
      })
      .catch((err) =>
        res.status(400).json({ message: 'Order delete failed', err })
      );
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
      .catch((err) =>
        res.status(400).json({ message: 'create order failed', err })
      );
  },
};

module.exports = products;

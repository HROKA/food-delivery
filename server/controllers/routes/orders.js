const {
  getAllOrders,
  deleteOrderById,
  getOrderById,
} = require('../../database/queries/orders');
const { deleteDetailsByOrderId } = require('../../database/queries/details');

const products = {
  // get all orders
  AllOrders: (req, res) =>
    getAllOrders()
      .then(({ rows }) => res.status(200).json(rows))
      .catch((err) => res.status(400).json({ message: 'Bad request', err })),

  // get order by id
  orderById: (req, res) => {
    const id = req.url.split('/')[2];
    getOrderById(id)
      .then(({ rows }) => res.status(200).json(rows))
      .catch((err) => res.status(400).json({ message: 'Bad request', err }));
  },

  // delete order by id
  deleteOrderbyId: (req, res) => {
    const id = req.url.split('/')[2];
    deleteDetailsByOrderId(id).then(() => {
      deleteOrderById(id)
        .then(() => res.status(200).json({ message: 'delete successful' }))
        .catch((err) => res.status(400).json({ message: 'Bad request', err }));
    });
  },
};

module.exports = products;

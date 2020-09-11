const { getAllOrders, deleteOrderById } = require('../../database/queries');

const products = {
  // get all orders
  AllOrders: (req, res) =>
    getAllOrders()
      .then(({ rows }) => res.status(200).json(rows))
      .catch((err) => res.status(400).json({ message: 'Bad request', err })),

  // delete order by id
  deleteOrderbyId: (req, res) => {
    const id = req.url.split('/')[2];
    deleteOrderById(id)
      .then(({ rows }) => res.status(200).json(rows))
      .catch((err) => res.status(400).json({ message: 'Bad request', err }));
  },
};

module.exports = products;

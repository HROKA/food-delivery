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

  // delete order by id
  deleteOrderbyId: (req, res) => {
    const { id } = req.params;
    deleteDetailsByOrderId(id).then(() => {
      deleteOrderById(id)
        .then(() =>
          res
            .status(200)
            .json({ message: `Order ${id} was deleted successfully` })
        )
        .catch((err) =>
          res
            .status(400)
            .json({ message: 'Order has been used in details', err })
        );
    });
  },
};

module.exports = products;

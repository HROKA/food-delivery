const adminRouter = require('express').Router();

const {
  AllOrders,
  orderById,
  deleteOrderbyId,
} = require('../controllers/routes/orders');

adminRouter.get('/orders', AllOrders);
adminRouter.get('/orders/:id', orderById);
adminRouter.delete('/orders/:id', deleteOrderbyId);

module.exports = adminRouter;

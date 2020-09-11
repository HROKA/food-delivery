const adminRouter = require('express').Router();

const { AllOrders, deleteOrderbyId } = require('../controllers/routes/orders');

adminRouter.get('/orders', AllOrders);
adminRouter.delete('/orders/:id', deleteOrderbyId);

module.exports = adminRouter;

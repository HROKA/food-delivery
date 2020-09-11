const adminRouter = require('express').Router();

const { AllOrders, deleteOrderbyId } = require('../controllers/routes/orders');
const {
  getAllProducts,
  deleteProduct,
} = require('../controllers/routes/products');

adminRouter.get('/orders', AllOrders);

adminRouter.delete('/orders/:id', deleteOrderbyId);

adminRouter.get('/products', getAllProducts);

adminRouter.delete('/product/:id', deleteProduct);

module.exports = adminRouter;

const adminRouter = require('express').Router();

const {
  AllOrders,
  orderById,
  deleteOrderbyId,
} = require('../controllers/routes/orders');

const {
  getAllProducts,
  addProduct,
  deleteProduct,
} = require('../controllers/routes/products');

// --------------------- ***orders***--------------------------
// **GET**
adminRouter.get('/orders', AllOrders);

adminRouter.get('/orders/:id', orderById);

// **DELETE**
adminRouter.delete('/orders/:id', deleteOrderbyId);

// --------------------- ***products***--------------------------
// **GET**
adminRouter.get('/product', getAllProducts);

// **POST**
adminRouter.post('/product/', addProduct);

// **DELETE**
adminRouter.delete('/product/:id', deleteProduct);

module.exports = adminRouter;

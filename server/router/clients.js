const ClientsRouter = require('express').Router();

const {
  getClientOrders,
  createOrder,
  deleteClientOrder,
} = require('../controllers/routes/orders');

const {
  getAllProducts,
  getProductByID,
} = require('../controllers/routes/products');

// --------------------- ***orders***--------------------------
// **GET**
ClientsRouter.get('/orders', getClientOrders);

// **POST**
ClientsRouter.post('/orders', createOrder);

// **DELETE**
ClientsRouter.delete('/orders', deleteClientOrder);

// --------------------- ***products***--------------------------
// **GET**
ClientsRouter.get('/products', getAllProducts);

// **GET**
ClientsRouter.get('/product/:id', getProductByID);

module.exports = ClientsRouter;

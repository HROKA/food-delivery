const ClientsRouter = require('express').Router();

const { getAllProducts } = require('../controllers/routes/products');
const {
  createOrder,
  getClientOrders,
} = require('../controllers/routes/orders');

// --------------------- ***products***--------------------------
// **GET**
ClientsRouter.get('/products', getAllProducts);

ClientsRouter.get('/orders', getClientOrders);

// **POST**
ClientsRouter.post('/orders', createOrder);

module.exports = ClientsRouter;

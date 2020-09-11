const ClientsRouter = require('express').Router();

const { getAllProducts } = require('../controllers/routes/products');
const { createOrder } = require('../controllers/routes/orders');

// --------------------- ***products***--------------------------
// **GET**
ClientsRouter.get('/products', getAllProducts);

// **POST**
ClientsRouter.post('/orders', createOrder);

module.exports = ClientsRouter;

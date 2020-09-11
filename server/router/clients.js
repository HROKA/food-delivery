const ClientsRouter = require('express').Router();

const { getAllProducts } = require('../controllers/routes/products');
const { createOrder } = require('../controllers/routes/orders');

ClientsRouter.get('/products', getAllProducts);

ClientsRouter.post('/orders', createOrder);

module.exports = ClientsRouter;

const ClientsRouter = require('express').Router();

const { getAllProducts } = require('../controllers/routes/products');

ClientsRouter.get('/products', getAllProducts);

module.exports = ClientsRouter;

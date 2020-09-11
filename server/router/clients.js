const ClientsRouter = require('express').Router();

const { getAllProducts } = require('../controllers/routes/products');

// --------------------- ***products***--------------------------
// **GET**
ClientsRouter.get('/products', getAllProducts);

module.exports = ClientsRouter;

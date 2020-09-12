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

const {
  getClientData,
  updateProfile,
} = require('../controllers/routes/profile');

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

ClientsRouter.get('/product/:id', getProductByID);

// --------------------- ***profile***--------------------------
// **GET**
ClientsRouter.get('/profile/:id', getClientData);

// **PATCH**
ClientsRouter.patch('/profile/:id', updateProfile);

module.exports = ClientsRouter;

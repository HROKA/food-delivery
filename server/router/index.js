const router = require('express').Router();

const clientRouter = require('./clients');
const { getAllOrders } = require('../controllers/routes/orders');

router.use('/client', clientRouter);

router.get('/orders', getAllOrders);

module.exports = router;

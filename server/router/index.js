const router = require('express').Router();

const { getAllOrders } = require('../controllers/routes/orders');

router.get('/orders', getAllOrders);

module.exports = router;

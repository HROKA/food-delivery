const router = require('express').Router();

const { AllOrders, deleteOrderbyId } = require('../controllers/routes/orders');

router.get('/orders', AllOrders);
router.delete('/orders/:id', deleteOrderbyId);

module.exports = router;

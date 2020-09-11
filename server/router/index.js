const router = require('express').Router();

const clientRouter = require('./clients');
const adminRouter = require('./admin');

router.use('/client', clientRouter);

router.use('/admin', adminRouter);

module.exports = router;

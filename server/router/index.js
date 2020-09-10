const router = require('express').Router();

const clientRouter = require('./clients');

router.use('/client', clientRouter);

module.exports = router;

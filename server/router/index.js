const router = require('express').Router();

const clientRouter = require('./clients');
const adminRouter = require('./admin');
const authentication = require('./auth');

router.use('/client', clientRouter);

router.use('/admin', adminRouter);

router.use('/auth', authentication);

// error 500 handling
router.use((err, req, res, next) => {
  if (err) res.status(500).json({ message: 'Request error', err });
});

module.exports = router;

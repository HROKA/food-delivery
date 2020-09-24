const router = require('express').Router();

const clientRouter = require('./clients');
const adminRouter = require('./admin');
const authentication = require('./auth');
const { isClient, isAdmin } = require('../controllers/middleware');

router.use('/client', isClient, clientRouter);

router.use('/admin', isAdmin, adminRouter);

router.use('/auth', authentication);

// error 500 handling
router.use((err, req, res, next) => {
  if (err) res.status(500).json({ message: 'Request error', err });
});

module.exports = router;

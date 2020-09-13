const authRouter = require('express').Router();
const adminSignIn = require('../controllers/auth/adminSignIn');
const adminSignOut = require('../controllers/auth/adminSignOut');

// --------------------- ***ADMIN***--------------------------
// **POST**
authRouter.post('/admin/sign-in', adminSignIn);

authRouter.post('/admin/sign-out', adminSignOut);

module.exports = authRouter;

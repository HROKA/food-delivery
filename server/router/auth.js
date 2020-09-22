const authRouter = require('express').Router();
const adminSignIn = require('../controllers/auth/adminSignIn');
const clientSignIn = require('../controllers/auth/clientSignIn');

// --------------------- ***ADMIN***--------------------------
// **POST**
authRouter.post('/admin/sign-in', adminSignIn);
authRouter.post('/client/sign-in', clientSignIn);

module.exports = authRouter;

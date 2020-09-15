const authRouter = require('express').Router();
const adminSignIn = require('../controllers/auth/adminSignIn');
const clientSignup = require('../controllers/auth/signup');
const loginWithMobileNumber = require('../controllers/auth/loginWithMobileNumber');

// --------------------- ***ADMIN***--------------------------
// **POST**
authRouter.post('/admin/sign-in', adminSignIn);

// --------------------- ***CLIENT***--------------------------
// **POST**
authRouter.post('/client/signup', clientSignup);
authRouter.post('/client/login', loginWithMobileNumber);

module.exports = authRouter;

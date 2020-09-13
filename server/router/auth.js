const authRouter = require('express').Router();
const adminSignIn = require('../controllers/auth/adminSignIn');
const clientSignup = require('../controllers/auth/signup');

// --------------------- ***ADMIN***--------------------------
// **POST**
authRouter.post('/admin/sign-in', adminSignIn);

// --------------------- ***CLIENT***--------------------------
// **POST**
authRouter.post('/client/signup', clientSignup);

module.exports = authRouter;

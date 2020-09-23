const authRouter = require('express').Router();
const adminSignIn = require('../controllers/auth/adminSignIn');
const clientSignIn = require('../controllers/auth/clientSignIn');
const clientSignup = require('../controllers/auth/signup');
const clientSignInByFacebook = require('../controllers/auth/clientSignInByFacebook');

// --------------------- ***ADMIN***--------------------------
// **POST**
authRouter.post('/admin/sign-in', adminSignIn);

// --------------------- ***CLIENT***--------------------------
// **POST**
authRouter.post('/client/signup', clientSignup);
authRouter.post('/client/signin', clientSignIn);
authRouter.post('/client/signin/facebook', clientSignInByFacebook);

module.exports = authRouter;

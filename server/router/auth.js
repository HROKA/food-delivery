const authRouter = require('express').Router();
const adminSignIn = require('../controllers/auth/adminSignIn');

// --------------------- ***ADMIN***--------------------------
// **POST**
authRouter.post('/admin/sign-in', adminSignIn);

module.exports = authRouter;

const authRouter = require('express').Router();
const adminSignIn = require('../controllers/auth/adminSignIn');

// --------------------- ***ADMIN***--------------------------
// **POST**
authRouter.post('/sign-in/admin', adminSignIn);

module.exports = authRouter;

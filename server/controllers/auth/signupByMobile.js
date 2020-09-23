/* eslint-disable camelcase */
const { hash } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const { signUpByMobile } = require('../../database/queries/auth');
const { getClient_Data } = require('../../database/queries/profile');

const signUp = async (req, res, next) => {
  const { name, password, mobile_number, location, address } = req.body;
  // get random color to use it in avatar
  const randomColor = Math.random().toString(16).substr(-6);
  // generation avatar with client name
  const avatar = `https://ui-avatars.com/api/?name=${name}&rounded=true&background=${randomColor}&color=F3F3F3`;
  const favorite = [];

  try {
    // check if mobile number is exist
    const checkMobileNumber = await getClient_Data({ mobile_number });

    if (checkMobileNumber.rowCount > 0) {
      res.status(400).json({ message: 'this account is already exist' });
    } else {
      // hash password
      const hashedPassword = await hash(password, 10);
      // add the client data to use it as client token

      const clientData = name + hashedPassword;
      const clientToken = sign(clientData, process.env.SECRET_KEY);
      await signUpByMobile(
        name,
        hashedPassword,
        mobile_number,
        avatar,
        location,
        address,
        favorite
      );

      res
        .status(200)
        .json({ message: ' signUp successful', role: clientToken });
    }
  } catch (error) {
    next('signUp field');
  }
};

module.exports = signUp;

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
      const { rows } = await signUpByMobile(
        name,
        hashedPassword,
        mobile_number,
        avatar,
        location,
        address,
        favorite
      );
      const clientId = { clientId: rows[0].id };
      const CLIENT_TOKEN = sign(clientId, process.env.SECRET_KEY);
      res.status(200).json({
        message: ' signUp successful',
        CLIENT_TOKEN,
        client_Data: {
          name,
          password: hashedPassword,
          mobile_number,
          avatar,
          location,
          address,
          favorite,
          id: rows[0].id,
        },
      });
    }
  } catch (error) {
    next('signUp field');
  }
};

module.exports = signUp;

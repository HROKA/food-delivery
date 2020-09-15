/* eslint-disable camelcase */
const { hash } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const { signUpClient } = require('../../database/queries/auth');
const { getClient_Data } = require('../../database/queries/profile');

const signUp = async (req, res, next) => {
  const {
    name,
    password,
    mobile_number,
    facebook_profile,
    location,
    address,
    avatar,
  } = req.body;

  // get random color to use it in avatar
  const randomColor = Math.random().toString(16).substr(-6);
  // generation avatar with client name
  const defaultAvatar = `https://ui-avatars.com/api/?name=${name}&rounded=true&background=${randomColor}&color=F3F3F3`;
  const favorite = [];

  // check if mobile number or facebook is exist
  const checkMobileNumber = await getClient_Data({ mobile_number });
  const checkFaceBook = await getClient_Data({ facebook_profile });

  if (checkFaceBook.rowCount > 0 || checkMobileNumber.rowCount > 0) {
    res.status(400).json({ message: 'this account is already exist' });
  } else {
    // hash password
    const hashedPassword = await hash(password, 10);
    // add the client data to use it as client token
    const clientData = name + hashedPassword;
    const clientToken = sign(clientData, process.env.SECRET_KEY);
    signUpClient(
      name,
      hashedPassword,
      /** if client use mobile will send mobile to query and the query will
      take the mobile_number as a key and the value for it
      * */
      mobile_number ? { mobile_number } : { facebook_profile },
      avatar || defaultAvatar,
      location,
      address,
      favorite
    )
      .then(() =>
        res.status(200).json({ message: ' signUp successful', clientToken })
      )
      .catch(() => next('signUp field'));
  }
};

module.exports = signUp;

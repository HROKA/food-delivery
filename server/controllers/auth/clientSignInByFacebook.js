/* eslint-disable camelcase */
const { sign } = require('jsonwebtoken');

const { signUpByFacebook } = require('../../database/queries/auth');
const { getClient_Data } = require('../../database/queries/profile');

const signUp = async (req, res, next) => {
  const {
    id,
    name,
    email,
    picture: {
      data: { url },
    },
  } = req.body;

  const checkFaceBook = await getClient_Data({ facebook_profile: email });
  const clientData = id + name;
  const clientToken = sign(clientData, process.env.SECRET_KEY);

  if (checkFaceBook.rowCount > 0) {
    res.status(200).json({
      message: 'sign in successfully',
      role: clientToken,
      data: checkFaceBook,
    });
  } else {
    try {
      await signUpByFacebook(name, email, url);
      res.status(200).json({
        message: ' signUp successful',
        role: clientToken,
        data: { name, email, url },
      });
    } catch (error) {
      next('signUp field');
    }
  }
};

module.exports = signUp;

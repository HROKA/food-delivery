/* eslint-disable camelcase */
const { sign } = require('jsonwebtoken');

const { signUpByFacebook } = require('../../database/queries/auth');
const { getClient_Data } = require('../../database/queries/profile');

const signUp = async (req, res, next) => {
  const {
    name,
    email,
    picture: {
      data: { url },
    },
  } = req.body;

  const checkFaceBook = await getClient_Data({ facebook_profile: email });
  if (checkFaceBook.rowCount > 0) {
    const clientId = { clientId: checkFaceBook.id };
    const CLIENT_TOKEN = sign(clientId, process.env.SECRET_KEY);
    res.status(200).json({
      message: 'sign in successfully',
      CLIENT_TOKEN,
      data: checkFaceBook,
    });
  } else {
    try {
      const { rows } = await signUpByFacebook(name, email, url);
      const clientId = { clientId: rows[0].id };
      const CLIENT_TOKEN = sign(clientId, process.env.SECRET_KEY);
      res.status(200).json({
        message: ' signUp successful',
        CLIENT_TOKEN,
        data: { name, email, url, id: rows[0].id },
      });
    } catch (error) {
      next('signUp field');
    }
  }
};

module.exports = signUp;

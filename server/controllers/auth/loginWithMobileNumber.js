/* eslint-disable camelcase */
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const { getClient_Data } = require('../../database/queries/profile');

const loginWithMobileNumber = async (req, res, next) => {
  const { mobile_number, password } = req.body;
  const { rows } = await getClient_Data({ mobile_number });
  try {
    if (!rows.length) throw new Error();
    compare(password, rows[0].password, (err) => {
      if (err) next('Wrong password');
      else {
        const clientData = rows[0].name + rows[0].password;
        const clientToken = sign(clientData, process.env.SECRET_KEY);
        res.status(200).json({ message: ' Login successful', clientToken });
      }
    });
  } catch (err) {
    next('Wrong mobile number or Password');
  }
};

module.exports = loginWithMobileNumber;

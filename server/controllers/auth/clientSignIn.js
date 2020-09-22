const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const connection = require('../../database/config/connection');

const adminSignIn = async (req, res, next) => {
  const { mobileNumber, password } = req.body;
  try {
    const {
      rows,
    } = await connection.query(
      'SELECT * FROM clients WHERE mobile_number=$1;',
      [mobileNumber]
    );
    if (!rows.length) throw new Error();
    compare(password, rows[0].password, (err, result) => {
      if (!result) next('Wrong user name or password');
      else {
        const clientToken = { adminId: rows[0].id };
        const cookie = sign(clientToken, process.env.SECRET_KEY);
        res.status(200).json({
          status: 'Log in successfully',
          role: cookie,
          data: rows,
        });
      }
    });
  } catch (err) {
    next('Wrong User name or Password');
  }
};

module.exports = adminSignIn;

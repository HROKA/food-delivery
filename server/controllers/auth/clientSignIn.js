const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const connection = require('../../database/config/connection');

const clientSignIn = async (req, res, next) => {
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
        const clientData = rows[0].name + rows[0].password;
        const ClientToken = sign(clientData, process.env.SECRET_KEY);
        res.status(200).json({
          status: 'Log in successfully',
          role: ClientToken,
          data: rows,
        });
      }
    });
  } catch (err) {
    next('Wrong User name or Password');
  }
};

module.exports = clientSignIn;

const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const connection = require('../../database/config/connection');

const adminSignIn = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    const {
      rows,
    } = await connection.query('SELECT * FROM admins WHERE name=$1;', [name]);
    if (!rows.length) throw new Error();
    compare(password, rows[0].password, (err) => {
      if (err) next('Wrong user name or password');
      else {
        const adminToken = { adminId: rows[0].id };
        const cookie = sign(adminToken, process.env.SECRET_KEY);
        res.cookie('admin', cookie).status(200).json({
          status: 'Log in successfully',
          role: 'admin',
          data: rows,
        });
      }
    });
  } catch (err) {
    next('Wrong User name or Password');
  }
};

module.exports = adminSignIn;

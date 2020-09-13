/* eslint-disable camelcase */
const connection = require('../config/connection');

const authQuery = {
  // add new client
  signUpClient: (name, password, value, avatar, location, address, favorite) =>
    connection.query(
      `INSERT INTO clients (name,password,${
      Object.keys(value)[0]
      },avatar,location,address,favorite) VALUES ($1, $2, $3, $4, $5, $6, $7::text[])`,
      [
        name,
        password,
        value[Object.keys(value)[0]],
        avatar,
        location,
        address,
        favorite,
      ]
    ),
};

module.exports = authQuery;

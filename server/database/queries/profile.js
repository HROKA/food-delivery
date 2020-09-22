/* eslint-disable camelcase */
const connection = require('../config/connection');

const clientQuery = {
  // get all clients data
  getAllClients: () =>
    connection.query('SELECT * FROM clients ORDER BY id DESC'),

  // get client data
  getClient_Data: (value) =>
    connection.query(
      `SELECT * FROM clients WHERE ${Object.keys(value)[0]} = $1;`,
      [value[Object.keys(value)[0]]]
    ),

  // update client data
  updateProfile: ({
    id,
    name,
    mobile_number,
    facebook_profile,
    password,
    avatar,
    location,
    address,
    favorite,
  }) =>
    connection.query(
      `UPDATE clients SET 
      name = $1,
      mobile_number = $2,
      facebook_profile = $3,
      password = $4,
      avatar = $5,
      location = $6,
      address = $7,
      favorite=$8::text[]
   WHERE id=$9;`,
      [
        name,
        mobile_number,
        facebook_profile,
        password,
        avatar,
        location,
        address,
        favorite,
        id,
      ]
    ),
};

module.exports = clientQuery;

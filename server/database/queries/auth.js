/* eslint-disable camelcase */
const connection = require('../config/connection');

const authQuery = {
  // sign up by mobile number
  signUpByMobile: (
    name,
    password,
    mobile_number,
    avatar,
    location,
    address,
    favorite
  ) =>
    connection.query(
      `INSERT INTO clients (name,password,mobile_number,avatar,location,address,favorite) VALUES ($1, $2, $3, $4, $5, $6, $7::text[])`,
      [name, password, mobile_number, avatar, location, address, favorite]
    ),
  // sign up by facebook
  signUpByFacebook: (name, facebook_profile, avatar) =>
    connection.query(
      `INSERT INTO clients (name,facebook_profile,avatar) VALUES ($1, $2, $3)`,
      [name, facebook_profile, avatar]
    ),
};

module.exports = authQuery;

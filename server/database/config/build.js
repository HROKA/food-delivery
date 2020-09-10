const { readFileSync } = require('fs');
const { join } = require('path');

require('env2')('../.env');

const connection = require('./connection');

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'data.sql')).toString();
  return connection.query(sql);
};

module.exports = dbBuild;

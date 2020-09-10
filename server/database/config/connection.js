const { Pool } = require('pg');
require('env2')('config.env');

let dbUrl;
switch (process.env.NODE_ENV) {
  case 'production':
    dbUrl = process.env.PRODUCT_URL;
    break;
  default:
    dbUrl = process.env.DEV_URL;
    // eslint-disable-next-line no-console
    console.log('Development database connected');
}

const options = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(options);

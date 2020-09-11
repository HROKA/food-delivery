const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const app = express();

const router = require('./router');

app.disabled('x-powered-by');

app.set('port', process.env.PORT || 5000);

const middleWares = [
  compression(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: false }),
];

app.use(middleWares);

app.use('/api/v1', router);

module.exports = app;

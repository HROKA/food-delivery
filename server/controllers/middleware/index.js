const { verify } = require('jsonwebtoken');
require('env2')('config.env');

const isClient = (req, res, next) => {
  const clientToken = req.method === 'GET' ? req.query.token : req.body.token;
  try {
    verify(clientToken, process.env.SECRET_KEY, (error, token) => {
      if (error) {
        res.status(401).send({
          statusCode: 401,
          auth: false,
          message: 'you are Unauthorized',
        });
      } else {
        const { clientId } = token;
        res.clientId = clientId;
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};

const isAdmin = (req, res, next) => {
  try {
    verify(req.body.token, process.env.SECRET_KEY, (error, token) => {
      if (error) {
        res.status(401).send({
          statusCode: 401,
          auth: false,
          message: 'you are Unauthorized',
        });
      } else {
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { isClient, isAdmin };

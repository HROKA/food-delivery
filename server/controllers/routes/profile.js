/* eslint-disable camelcase */
const { getClient_Data } = require('../../database/queries/profile');

const clients = {
  // get client data
  getClientData: (req, res, next) => {
    const { id } = req.params;
    getClient_Data(id)
      .then(({ rows }) => res.status(200).json(rows))
      .catch(() => next('User Not found'));
  },
};

module.exports = clients;

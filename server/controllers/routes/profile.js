/* eslint-disable camelcase */
const {
  getClient_Data,
  updateProfile,
  getAllClients,
} = require('../../database/queries/profile');

const clients = {
  // get all clients data
  getAllClients: (req, res, next) => {
    getAllClients()
      .then(({ rows }) => res.status(200).json(rows))
      .catch(() => next('Users Not found'));
  },

  // get client data
  getClientData: (req, res, next) => {
    const { id } = req.params;
    getClient_Data(id)
      .then(({ rows }) => res.status(200).json(rows))
      .catch(() => next('User Not found'));
  },

  // get client data
  updateProfile: (req, res, next) => {
    const { id } = req.params;
    updateProfile({ id, ...req.body })
      .then(() =>
        res.status(200).json({ message: 'User Updated successfully' })
      )
      .catch((err) => next({ msg: 'User Not found', err }));
  },
};

module.exports = clients;

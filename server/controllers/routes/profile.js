/* eslint-disable camelcase */
const {
  getClient_Data,
  updateProfile,
  getAllClients,
  updateFavorite,
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
    const id = res.clientId;
    getClient_Data({ id })
      .then(({ rows }) => res.status(200).json(rows))
      .catch(() => next('User Not found'));
  },

  // Update client data
  updateProfile: (req, res, next) => {
    const id = res.clientId;
    updateProfile({ id, ...req.body })
      .then(() =>
        res.status(200).json({ message: 'User Updated successfully' })
      )
      .catch((err) => next({ msg: 'User Not found', err }));
  },

  // Update favorites
  updateFavorite: async (req, res, next) => {
    const id = res.clientId;
    const { productId } = req.body;
    try {
      // first i get data
      const { rows } = await getClient_Data({ id });
      const { favorite } = rows[0];

      // then i check the id if found or not
      if (favorite.includes(productId)) {
        // if includes we will get the indexOf product inside favorite array
        const index = favorite.indexOf(productId);
        // then delete it with splice
        favorite.splice(index, 1);
        // last update the favorite
        await updateFavorite({ id, favorite });
        res.status(200).json({ message: 'delete successful', favorite });
      } else {
        // if not includes we will push it to array
        favorite.push(productId);
        // then update the favorite
        await updateFavorite({ id, favorite });
        res.status(200).json({ message: 'add successful', favorite });
      }
    } catch (err) {
      next({ msg: 'update favorite failed', err });
    }
  },
};

module.exports = clients;

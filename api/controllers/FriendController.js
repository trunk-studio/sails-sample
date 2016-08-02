module.exports = {
  create: async (req, res) => {
    try {
      let friend = await Friend.create(req.body);
      res.ok(friend);
    } catch (e) {
      res.serverError(e);
    }
  },

  find: async (req, res) => {
    try {
      let friends = await Friend.findAll();
      res.ok({friends});
    } catch (e) {
      res.serverError(e);
    }
  },

  update: async (req, res) => {
    try {
      let result = await Friend.update(req.body,{
        where: {
          id: req.params.id
        }
      });
      res.ok(result);
    } catch (e) {
      res.serverError(e);
    }
  },

  delete: async (req, res) => {
    try {
      let result = await Friend.destroy({
        where: {
          id: req.params.id
        }
      });
      res.ok(true);
    } catch (e) {
      res.serverError(e);
    }
  },

}

/**
 * FriendController
 *
 * @description :: Server-side logic for managing friends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: async(req , res) => {
    try{
      let friends = await Friend.findAll();
      res.ok(friends);
      res.end();
    }
    catch(e){
      throw e;
    }

  },

  create: async(req , res) => {
    try{
      let name  = req.body.name,
          email = req.body.email,
          facebookId = req.body.facebookId;

      let newFriend = await Friend.create({
        name: name,
        email: email,
        facebookId: facebookId
      });

      res.ok(newFriend);
      res.end();
    }
    catch(e){
      throw e;
    }
  },

  update: async(req , res) => {
    try{
      let id = req.body.id,
          email = req.body.email,
          name  = req.body.name;

      await Friend.update({
        name: name,
        email: email
      },{
        where:{id: id}
      });
      
      let updateInfo = await Friend.findById(id);

      res.ok(updateInfo);
      res.end();
    }
    catch(e){
      throw e;
    }
  },

  destroy: async(req , res) => {
    try{
      console.log('friend delete...');
      let id = req.params['id'];

      let delFriend = await Friend.destroy({
        where:{
          id: id
        }
      });

      res.ok();
      res.end();
    }
    catch(e){
      throw e;
    }
  }
};

/**
 * FriendController
 *
 * @description :: Server-side logic for managing friends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
  index: async(req , res) => {
    try{
      let friends = await friend.findAll();
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
          fbid = req.body.fbid;

      let newFriend = await friend.create({
        name: name,
        email: email,
        fbid: fbid
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

      await friend.update({
        name: name,
        email: email
      },
      {
        where:{id: id}
      });
      
      let updateInfo = await friend.findById(id);

      res.ok(updateInfo);
      res.end();
    }
    catch(e){
      throw e;
    }
  },

 delete: async(req , res) => {
    try{
      let id = req.params['id'];

      let delFriend = await friend.delete({
        where:{id: id}
      });

      res.ok();
      res.end();
    }
    catch(e){
      throw e;
    }
  }
};
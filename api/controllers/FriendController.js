/**
 * FriendController
 *
 * @description :: Server-side logic for managing friends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: async (req, res) => {
    try {

      let friendExist = await FriendService.getFriend();
      console.log("friend : " + friendExist);

      // 回傳驗證結果
      res.ok(friendExist);
      res.end;
      //return res.json(user);
    } catch (e) {
      res.serverError(e);
    }
  },
  create: async (req, res) => {
    try {
      let newFriend = req.body

      let friendNew = await FriendService.createFriend(newFriend);
      console.log("friend : " + friendNew);

      // 回傳驗證結果
      res.ok(friendNew);
      res.end;
      //return res.json(user);
    } catch (e) {
      res.serverError(e);
    }
  },
  update: async (req, res) => {
    try {

      let updatef = req.body;

      let friendUpdate = await FriendService.updateFriend(updatef);
      console.log("friend : " + friendUpdate);

      // 回傳驗證結果
      res.ok(friendUpdate);
      res.end;
      //return res.json(user);
    } catch (e) {
      res.serverError(e);
    }
  },
  delete: async (req, res) => {
    try {
      let deleteid = req.params['id'];

      let friendDelete = await FriendService.deleteFriend(deleteid);
      console.log("friend : " + friendDelete);

      // 回傳驗證結果
      res.ok(friendDelete);
      res.end;
      //return res.json(user);
    } catch (e) {
      res.serverError(e);
    }
  },

};

module.exports = {

  getFriend: async () => {
    try {

      // 根據 model 的 spec 完成下列實作
      let friendExist = await Friend.findAll();

      return friendExist;

    } catch (e) {
      throw e;
    }
  },

  createFriend: async (friend) => {
    try {

      console.log(friend.email);
      console.log(friend.fbId);
      console.log(friend.name);

      // 根據 model 的 spec 完成下列實作
      let friendCreate = await Friend.create({
        email: friend.email,
        name: friend.name,
        fbId: friend.fbId
      });

      return friendCreate;

    } catch (e) {
      throw e;
    }
  },
  updateFriend: async (friend) => {
    try {

      console.log(friend.email);
      console.log(friend.fbId);
      console.log(friend.name);

      // 根據 model 的 spec 完成下列實作
      let friendUpdate = await Friend.update({
        email: friend.email,
        name: friend.name,
        fbId: friend.fbId
      },{
        where:{ id : friend.id}
      });

      return friendUpdate;

    } catch (e) {
      throw e;
    }
  },
  deleteFriend: async (did) => {
    try {

      console.log(did);

      // 根據 model 的 spec 完成下列實作
      let friendDelete = await Friend.findOne({
        where:{id: did}
      });

      let deleteFriend = await friendDelete.destroy();

      return deleteFriend;

    } catch (e) {
      throw e;
    }
  },
}

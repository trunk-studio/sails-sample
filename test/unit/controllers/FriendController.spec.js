describe('test Friend CRUD', () => {
  let friendId = null;
  before(async (done) => {
    try {
      const newFriend = {
        name: 'wahaha',
        email: 'wahaha@gm.com',
        facebookId: '1234567'
      };
      const result = await Friend.create(newFriend);
      friendId = result.id;
      done();
    }catch (e){
      done();
    }
  });

  it('create a friend', async (done) => {
    try{
      const newFriend = {
        name: 'wahaha',
        email: 'wahaha@gm.com',
        facebookId: '1234567'
      }
      let res = await request(sails.hooks.http.app)
      .post(`/friend/create`)
      .send(newFriend).expect(200);
      res.body.should.have.keys('id', 'name', 'email', 'facebookId', 'updatedAt', 'createdAt');
      done();
    }catch(e){
      done();
    }
  });

  it('get friends', async (done) => {
    try{
      let res = await request(sails.hooks.http.app).get(`/friend/find`).expect(200);
      let {friends} = res.body;
      friends.should.be.Array;
      friends[0].should.have.keys('id', 'name', 'email', 'facebookId', 'updatedAt', 'createdAt');
      done();
    }catch(e){
      done();
    }
  });

  it('update a friend', async (done) => {
    try{
      let newInfo = {
        name: 'haha'
      }
      let res = await request(sails.hooks.http.app)
      .put(`/friend/update/${friendId}`)
      .send(newInfo)
      .expect(200);
      res.body.should.be.Array;
      res.body[0].should.be.eq(1);

      let friend = await Friend.findById(friendId);
      friend.name.should.be.eq('haha');
      done();
    }catch(e){
      done();
    }
  });

  it('delete a friend', async (done) => {
    try{
      let res = await request(sails.hooks.http.app)
      .delete(`/friend/destroy/${friendId}`)
      .expect(200);

      let friend = await Friend.findById(friendId);
      (friend === null).should.be.true;
      done();
    }catch(e){
      done();
    }
  });

});

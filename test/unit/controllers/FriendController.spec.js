describe('test Friend CRUD', () => {
  let friendId = null;
  before(async (done) => {
    done();
  });

  it('create a friend', async (done) => {
    let newFriend = {
      name: 'wahaha',
      email: 'wahaha@gm.com',
      facebookId: '1234567'
    }
    let res = await request(sails.hooks.http.app)
      .post(`/friend/create`)
      .send(newFriend).expect(200);
    res.body.should.have.keys('id', 'name', 'email', 'facebookId', 'updatedAt', 'createdAt');
    friendId = res.body.id;
    done();
  });

  it('get friends', async (done) => {
    let res = await request(sails.hooks.http.app).get(`/friend/find`).expect(200);
    let {friends} = res.body;
    friends.should.be.Array;
    friends[0].should.have.keys('id', 'name', 'email', 'facebookId', 'updatedAt', 'createdAt');
    done();
  });

  it('update a friend', async (done) => {
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
  });

  it('delete a friend', async (done) => {
    let res = await request(sails.hooks.http.app)
      .delete(`/friend/destroy/${friendId}`)
      .expect(200);

    let friend = await Friend.findById(friendId);
    (friend === null).should.be.true;
    done();
  });

});

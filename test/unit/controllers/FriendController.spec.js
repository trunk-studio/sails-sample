describe.only('test', function() {
  let friend = null;
  before(async (done) => {
    try {
      friend = await friend.create({
        email: 'asd@gmail.com',
        name: 'asd',
        fbid: '123456',
      });

      done();
    } catch (e) {
      done(e);
    }
  });

  it('get friends', async (done) => {
    try {
      let result = await request(sails.hooks.http.app)
      .get('/friend')
      console.log(result);
      result.status.should.be.eq(200);

      done();
    } catch (e) {
      done(e);
    }
  });

  it('add friend', async (done) => {
    try {
      let result = await request(sails.hooks.http.app)
      .post('/friend/create')
      .send({
        fbId: '1234567',
        name: 'qwe',
        email: 'qwe@mail.com',
      });
      result.status.should.be.eq(200);
      let find = await friend.findOne({
        where:{
          name: 'qwe'
        }
      });
      console.log(find);
      (find === null).should.be.false;


      done();
    } catch (e) {
      done(e);
    }
  });

  it('update friend', async (done) => {
    try {
      let result = await request(sails.hooks.http.app)
      .put('/friend/update')
      .send({
        fbId: '1234567',
        name: 'qwe',
        email: 'qwe@mail.com',
        id : 1
      });
      result.status.should.be.eq(200);
      let find = await friend.findOne({
        where:{
          id: 1
        }
      });
      console.log(find);
      (find === null).should.be.false;
      find.name.should.be.eq('test2');


      done();
    } catch (e) {
      done(e);
    }
  });
  it('delete friend', async (done) => {
    try {
      let result = await request(sails.hooks.http.app)
      .delete('/friend/delete/1');

      result.status.should.be.eq(200);
      let find = await friend.findOne({
        where:{
          id: 1
        }
      });
      console.log(find);
      (find === null).should.be.true;


      done();
    } catch (e) {
      done(e);
    }
  });

});
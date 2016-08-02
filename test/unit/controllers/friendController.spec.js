describe.only('對 friend Controller 進行使用者驗證', function() {
  let friend = null;
  before(async (done) => {
    // 建立測試的 friend 資料
    // 在進行 Login 驗證前需要 friend 事先存在
    try {
      friend = await Friend.create({
        email: 'test@gmail.com',
        name: 'test',
        fbId: '123456',
      });

      done();
    } catch (e) {
      done(e);
    }
  });

  it('get all friends', async (done) => {
    try {

      // 實作 controller 呼叫 service 完成 login 動作
      // 檔案位置：api/controllers/FriendController.js
      let result = await request(sails.hooks.http.app)
      .get('/friend')
      result.status.should.be.eq(200);

      done();
    } catch (e) {
      done(e);
    }
  });

  it('add friend', async (done) => {
    try {

      // 實作 controller 呼叫 service 完成 login 動作
      // 檔案位置：api/controllers/FriendController.js
      let result = await request(sails.hooks.http.app)
      .post('/friend/create')
      .send({
        fbId: '1234567',
        name: 'test2',
        email: 'test2@mail.com',
      });
      result.status.should.be.eq(200);
      let find = await Friend.findOne({
        where:{
          name: 'test2'
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

      // 實作 controller 呼叫 service 完成 login 動作
      // 檔案位置：api/controllers/FriendController.js
      let result = await request(sails.hooks.http.app)
      .put('/friend/update')
      .send({
        fbId: '1234567',
        name: 'test2',
        email: 'test2@mail.com',
        id : 1
      });
      result.status.should.be.eq(200);
      let find = await Friend.findOne({
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

      // 實作 controller 呼叫 service 完成 login 動作
      // 檔案位置：api/controllers/FriendController.js
      let result = await request(sails.hooks.http.app)
      .delete('/friend/delete/1');

      result.status.should.be.eq(200);
      let find = await Friend.findOne({
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

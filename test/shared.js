const request = require('supertest');
const app = require('../server.js');
var token = '';

before(function(done) {
    request(app)
      .post('/user/login')
      .send({
          "email":"admin@admin.com",
          "password": "1234"
      })
      .end(function(err, res) {
        token = res.body.token; // Or something
        done();
      });
});

const request = require('supertest');
const app = require('../server.js');

describe('POST /auth/login', function() {
    it('should user login return JSON', (done) => {
        request(app)
        .post('/auth/login')
        .send({
            "email":"admin@admin.com",
    	    "password": "1234"
        })
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            token = res.body.data;
            done();
        });
    })
    
    it('should user login fail', (done) => {
        request(app)
        .post('/auth/login')
        .send({
            "email":"admin@admin.com",
    	    "password": "wrong"
        })
        .set('Accept', 'application/json')
        .expect(401, { error: 'Unauthorized', message: 'Authentication failed' })
        .end((err, res) => {
            if (err) return done(err);
            done();
        });
    });
});

describe('GET /auth/me', function() {
    var auth = {};
    before(loginUser(auth));
    
    it('should return user json', (done) => {
        request(app)
        .get('/auth/me')
        .set('Accept', 'application/json')
        .set('Authorization', auth.token)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            done();
        });
    });
    
    it('should require authorization', (done) => {
        request(app)
        .get('/auth/me')
        .set('Accept', 'application/json')
        .expect(401, { error: 'Unauthorized', message: 'Authentication failed (token).' })
        .end((err, res) => {
            if (err) return done(err);
            done();
        });
    });
});


function loginUser(auth) {
    
    return function(done) {
        request(app)
            .post('/auth/login')
            .send({
                "email":"admin@admin.com",
                "password": "1234"
            })
            .expect(200)
            .end(onResponse);
        
        function onResponse(err, res) {
            auth.token = 'Bearer ' + res.body.data;
            return done();
        }
    };
}
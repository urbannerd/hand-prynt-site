const request = require('supertest');
const app = require('../app.js');

describe('GET /' , function() {
    it('respond with Invalid Endpoint', function(done) {
        request(app).get('/').expect('Invalid Endpoint', done);
    });
});
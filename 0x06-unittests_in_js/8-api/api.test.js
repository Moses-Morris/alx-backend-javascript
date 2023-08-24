const request = require('supertest');
const app = require('./api'); // Import your Express app

describe('API Test Suite', function() {
  it('should respond with status code 200 and correct result on index page', function(done) {
    request(app)
      .get('/')
      .expect(200) // Expected status code
      .expect('Welcome to the paymnet system') // Expected response text
      .end(done); // Call done to indicate test completion
  });
});

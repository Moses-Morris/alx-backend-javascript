const request = require('supertest');
const app = require('./api'); // Import your Express app

describe('API Test Suite', function() {
  it('should respond with status code 200 and correct result on index page', function(done) {
    request(app)
      .get('/')
      .expect(200) // Expected status code
      .expect('Welcome to the payment system') // Expected response text
      .end(done); // Call done to indicate test completion
  });
});

describe('GET /cart/:id', function() {
    it('should respond with status code 200 and payment methods for a valid cart ID', function(done) {
      request(app)
        .get('/cart/123') // Replace with a valid cart ID
        .expect(200) // Expected status code
        .end(done);
    });

    it('should respond with status code 404 when cart ID is not a number', function(done) {
      request(app)
        .get('/cart/notANumber') // Replace with a non-numeric cart ID
        .expect(404) // Expected status code
        .end(done);
    });

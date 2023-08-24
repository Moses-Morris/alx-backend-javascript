const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token'); // Import your function

describe('getPaymentTokenFromAPI', function() {
  it('should test the result of getPaymentTokenFromAPI(true)', function(done) {
    getPaymentTokenFromAPI(true)
      .then(result => {
        // Verify the result
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate test completion
      })
      .catch(err => done(err)); // Call done with error if there's an issue
  });

  it('should test the result of getPaymentTokenFromAPI(false)', function(done) {
    getPaymentTokenFromAPI(false)
      .then(result => {
        // Verify the result
        expect(result).to.be.undefined; // No data in the response
        done(); // Call done to indicate test completion
      })
      .catch(err => done(err)); // Call done with error if there's an issue
  });
});

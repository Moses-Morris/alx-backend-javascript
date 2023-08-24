const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with correct arguments', function() {
    // Create a spy on Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function under test
    sendPaymentRequestApi(100, 20);

    // Assert that the spy was called with the expected arguments
    assert(calculateNumberSpy.calledOnceWith('SUM', 100, 20));

    // Restore the spy to its original state
    calculateNumberSpy.restore();
  });

  // ... other tests ...
});

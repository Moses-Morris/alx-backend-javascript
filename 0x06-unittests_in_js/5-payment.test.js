const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment'); // Import your function
const Utils = require('./utils'); // Import the Utils module

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(function() {
    // Create a spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('should calculate the total and display the message for 100 and 20', function() {
    // Stub Utils.calculateNumber to return 120
    sinon.stub(Utils, 'calculateNumber').returns(120);

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify console output
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 120');

    // Restore stub
    Utils.calculateNumber.restore();
  });

  it('should calculate the total and display the message for 10 and 10', function() {
    // Stub Utils.calculateNumber to return 20
    sinon.stub(Utils, 'calculateNumber').returns(20);

    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Verify console output
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 20');

    // Restore stub
    Utils.calculateNumber.restore();
  });
});

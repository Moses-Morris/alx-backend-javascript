const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment'); // Import your function

const Utils = require('./utils'); // Import the Utils module

describe('sendPaymentRequestToApi', function() {
  it('should calculate the total and display the message', function() {
    // Stub Utils.calculateNumber to return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Capture console output
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(5, 5);

    // Check if Utils.calculateNumber was called with expected arguments
    sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 5, 5);

    // Check if the console.log message was displayed
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 10');

    // Restore stubs and spies
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});

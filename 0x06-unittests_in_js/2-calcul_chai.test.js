const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai'); // Import your function implementation here

describe('calculateNumber', function() {
  it('should return the correct sum', function() {
    const result = calculateNumber('SUM', 3, 5);
    expect(result).to.equal(8);
  });

  it('should return the correct subtraction result', function() {
    const result = calculateNumber('SUBTRACT', 10, 5);
    expect(result).to.equal(5);
  });

  it('should handle division with non-zero divisor', function() {
    const result = calculateNumber('DIVIDE', 10, 2);
    expect(result).to.equal(5);
  });

  it('should handle division with zero divisor', function() {
    const result = calculateNumber('DIVIDE', 10, 0);
    expect(result).to.equal('Error');
  });

  it('should round input numbers before calculations', function() {
    const result = calculateNumber('SUM', 3.4, 5.6);
    expect(result).to.equal(9);
  });

  it('should return correct result for negative numbers', function() {
    const result = calculateNumber('SUBTRACT', -5, -3);
    expect(result).to.equal(-2);
  });
});

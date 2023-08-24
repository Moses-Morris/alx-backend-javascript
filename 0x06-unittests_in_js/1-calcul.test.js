const assert = require('chai').assert;
const calculateNumber = require('./1-calcul'); // Import your function implementation here

describe('calculateNumber', function() {
  it('should return the correct sum', function() {
    const result = calculateNumber('SUM', 3, 5);
    assert.strictEqual(result, 8);
  });

  it('should return the correct subtraction result', function() {
    const result = calculateNumber('SUBTRACT', 10, 5);
    assert.strictEqual(result, 5);
  });

  it('should handle division with non-zero divisor', function() {
    const result = calculateNumber('DIVIDE', 10, 2);
    assert.strictEqual(result, 5);
  });

  it('should handle division with zero divisor', function() {
    const result = calculateNumber('DIVIDE', 10, 0);
    assert.strictEqual(result, 'Error');
  });

  it('should round input numbers before calculations', function() {
    const result = calculateNumber('SUM', 3.4, 5.6);
    assert.strictEqual(result, 9);
  });

  it('should return correct result for negative numbers', function() {
    const result = calculateNumber('SUBTRACT', -5, -3);
    assert.strictEqual(result, -2);
  });
});

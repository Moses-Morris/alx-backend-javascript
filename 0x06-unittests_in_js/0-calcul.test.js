const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  it('should return the correct sum when both numbers are integers', function() {
    const result = calculateNumber(3, 5);
    assert.strictEqual(result, 8);
  });

  it('should round input numbers and return the correct sum', function() {
    const result = calculateNumber(3.4, 5.6);
    assert.strictEqual(result, 9);
  });

  it('should handle negative input numbers', function() {
    const result = calculateNumber(-3.6, -5.3);
    assert.strictEqual(result, -9);
  });

  it('should handle one rounded input number', function() {
    const result = calculateNumber(3.6, 5);
    assert.strictEqual(result, 9);
  });

  it('should return 0 if both input numbers are 0', function() {
    const result = calculateNumber(0, 0);
    assert.strictEqual(result, 0);
  });
});

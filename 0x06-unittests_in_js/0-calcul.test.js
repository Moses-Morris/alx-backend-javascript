const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  it('should return the correct sum when both numbers are integers', function() {
    const result = calculateNumber(3, 5);
    assert.strictEqual(result, 8);
  });
});

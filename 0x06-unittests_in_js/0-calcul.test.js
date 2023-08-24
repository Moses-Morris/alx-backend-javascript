const assert = require('chai').assert;
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
	it('Should return sum of rounded numbers:', () => {
		let result = calculateNumber(1,3);
		assert.strictEqual(result, 4);
	});
});

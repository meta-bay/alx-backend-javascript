const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 8 for inputs 3 and 5', () => {
    assert.strictEqual(calculateNumber(3, 5), 8);
  });
  it('should return 5 for inputs 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return 5 for inputs 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6 for inputs 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return 1 for inputs 0.1 and 1', () => {
    assert.strictEqual(calculateNumber(0.1, 1), 1);
  });
});

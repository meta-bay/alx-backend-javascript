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
  it('should return 4 when a = 1.4 and b = 2.5', function () {
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
  });

  it('should return 4 when a = 1 and b = 3', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when a = 1.6 and b = 2.5', function () {
    assert.strictEqual(calculateNumber(1.6, 2.5), 5);
  });

  it('should return 0 when a = -0.4 and b = 0.4', function () {
    assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
  });

  it('should return -2 when a = -1.6 and b = -0.4', function () {
    assert.strictEqual(calculateNumber(-1.6, -0.4), -2);
  });

  it('should return 6 when a = 2.5 and b = 2.5', function () {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('should return 0 when a = 0.1 and b = -0.1', function () {
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });
});

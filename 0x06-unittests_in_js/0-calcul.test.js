const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 8 for inputs 3 and 5', () => {
    assert.equal(calculateNumber(3, 5), 8);
  });
  it('should return 5 for inputs 1 and 3.7', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should return 5 for inputs 1.2 and 3.7', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6 for inputs 1.5 and 3.7', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('should return 1 for inputs 0.1 and 1', () => {
    assert.equal(calculateNumber(0.1, 1), 1);
  });
  it('should return 0 for inputs 0 and 0', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('should return -2 for inputs -4 and 2', () => {
    assert.equal(calculateNumber(-4, 2), -2);
  });
  it('should return 3 for inputs 1.0 and 2.0', () => {
    assert.equal(calculateNumber(1.0, 2.0), 3);
  });
  it('should return 9 for inputs 2.234 and 6.6958', () => {
    assert.equal(calculateNumber(2.234, 6.6958), 9);
  });
  it('should return 10 for inputs 2.999999 and 6.6958', () => {
    assert.equal(calculateNumber(2.999999, 6.6958), 10);
  });
  it('should return 28 for inputs 25.2 and 3', () => {
    assert.equal(calculateNumber(25.2, 3), 28);
  });
  it('should return 26 for inputs 12 and 14', () => {
    assert.equal(calculateNumber(12, 14), 26);
  });
  it('should return 29 for inputs 11.4 and 17.8', () => {
    assert.equal(calculateNumber(11.4, 17.8), 29);
  });
});

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');
describe('calculateNumber', () => {
  it('...', () => {
    assert.equal(calculateNumber(3, 5), 8);
  });
  it('...', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('...', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('...', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('...', () => {
    assert.equal(calculateNumber(0.1, 1), 1);
  });
  it('...', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('...', () => {
    assert.equal(calculateNumber(-4, 2), -2);
  });
  it('...', () => {
    assert.equal(calculateNumber(1.0, 2.0), 3);
  });
  it('...', () => {
    assert.equal(calculateNumber(2.234, 6.6958), 9);
  });
  it('...', () => {
    assert.equal(calculateNumber(2.999999, 6.6958), 10);
  });
  it('...', () => {
    assert.equal(calculateNumber(25.2, 3), 28);
  });
  it('...', () => {
    assert.equal(calculateNumber(12, 14), 26);
  });
  it('...', () => {
    assert.equal(calculateNumber(11.4, 17.8), 29);
  });
});

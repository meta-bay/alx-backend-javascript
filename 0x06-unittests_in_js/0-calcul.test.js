const assert = require('assert');
const calculateNumber = require('./0-calcul.js');
describe('calculateNumber', function () {
  it('...', function () {
    assert.equal(calculateNumber(3, 5), 8);
  });
  it('...', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('...', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('...', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('...', function () {
    assert.equal(calculateNumber(0.1, 1), 1);
  });
  it('...', function () {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('...', function () {
    assert.equal(calculateNumber(-4, 2), -2);
  });
  it('...', function () {
    assert.equal(calculateNumber(1.0, 2.0), 3);
  });
  it('...', function () {
    assert.equal(calculateNumber(2.234, 6.6958), 9);
  });
});

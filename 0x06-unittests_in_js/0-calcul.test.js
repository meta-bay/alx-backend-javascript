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
});

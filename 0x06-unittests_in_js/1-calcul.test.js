const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('calculateNumber type == SUM', () => {
    it('should return 4 when a = 1.4 and b = 2.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.5), 4);
    });

    it('should return 4 when a = 1 and b = 3', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when a = 1.6 and b = 2.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.6, 2.5), 5);
    });

    it('should return 0 when a = -0.4 and b = 0.4', function () {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });

    it('should return -2 when a = -1.6 and b = -0.4', function () {
      assert.strictEqual(calculateNumber('SUM', -1.6, -0.4), -2);
    });

    it('should return 6 when a = 2.5 and b = 2.5', function () {
      assert.strictEqual(calculateNumber('SUM', 2.5, 2.5), 6);
    });

    it('should return 0 when a = 0.1 and b = -0.1', function () {
      assert.strictEqual(calculateNumber('SUM', 0.1, -0.1), 0);
    });
  });
  describe('calculateNumber type == SUBTRACT', () => {
    it('should return 4 when a = 1.4 and b = 2.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.5), -2);
    });

    it('should return 4 when a = 1 and b = 3', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should return 5 when a = 1.6 and b = 2.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 2.5), -1);
    });

    it('should return 0 when a = -0.4 and b = 0.4', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.4, 0.4), 0);
    });

    it('should return -2 when a = -1.6 and b = -0.4', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.6, -0.4), -2);
    });

    it('should return 6 when a = 2.5 and b = 2.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 2.5), 0);
    });

    it('should return 0 when a = 0.1 and b = -0.1', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.1, -0.1), 0);
    });
  });
  describe('calculateNumber type == DIVIDE', () => {
    it('should return 3 when a = 6 and b = 2', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3);
    });

    it('should return 4 when a = 1 and b = 3', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 6.4, 3.2), 2);
    });

    it('should return 5 when a = 1.6 and b = 2.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -10, -2.4), 5);
    });

    it('should return 0 when a = -0.4 and b = 0.4', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -0.4, 0.4), 'Error');
    });

    it('should return -2 when a = -1.6 and b = -0.4', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1.6, 1.4), -2);
    });

    it('should return 1 when a = 2.5 and b = 2.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 2.5), 1);
    });

    it('should return 0 when a = 0.1 and b = -0.1', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 0.1, 0), 'Error');
    });
  });
});

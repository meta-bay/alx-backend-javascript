#!/usr/bin/env node
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('calculateNumber type == SUM', () => {
    it('should return 4 when a = 1.4 and b = 2.5', function () {
      expect(calculateNumber('SUM', 1.4, 2.5)).to.equal(4);
    });

    it('should return 4 when a = 1 and b = 3', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5 when a = 1.6 and b = 2.5', function () {
      expect(calculateNumber('SUM', 1.6, 2.5)).to.equal(5);
    });

    it('should return 0 when a = -0.4 and b = 0.4', function () {
      expect(calculateNumber('SUM', -0.4, 0.4)).to.equal(0);
    });

    it('should return -2 when a = -1.6 and b = -0.4', function () {
      expect(calculateNumber('SUM', -1.6, -0.4),).to.equal(-2);
    });

    it('should return 6 when a = 2.5 and b = 2.5', function () {
      expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6);
    });

    it('should return 0 when a = 0.1 and b = -0.1', function () {
      expect(calculateNumber('SUM', 0.1, -0.1)).to.equal(0);
    });
  });
  describe('calculateNumber type == SUBTRACT', () => {
    it('should return 4 when a = 1.4 and b = 2.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 2.5)).to.equal(-2);
    });

    it('should return 4 when a = 1 and b = 3', function () {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('should return 5 when a = 1.6 and b = 2.5', function () {
      expect(calculateNumber('SUBTRACT', 1.6, 2.5)).to.equal(-1);
    });

    it('should return 0 when a = -0.4 and b = 0.4', function () {
      expect(calculateNumber('SUBTRACT', 0.4, 0.4)).to.equal(0);
    });

    it('should return -2 when a = -1.6 and b = -0.4', function () {
      expect(calculateNumber('SUBTRACT', -1.6, -0.4)).to.equal(-2);
    });

    it('should return 6 when a = 2.5 and b = 2.5', function () {
      expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0);
    });

    it('should return 0 when a = 0.1 and b = -0.1', function () {
      expect(calculateNumber('SUBTRACT', 0.1, -0.1)).to.equal(0);
    });
  });
  describe('calculateNumber type == DIVIDE', () => {
    it('should return 3 when a = 6 and b = 2', function () {
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
    });

    it('should return 4 when a = 1 and b = 3', function () {
      expect(calculateNumber('DIVIDE', 6.4, 3.2)).to.equal(2);
    });

    it('should return 5 when a = 1.6 and b = 2.5', function () {
      expect(calculateNumber('DIVIDE', -10, -2.4)).to.equal(5);
    });

    it('should return 0 when a = -0.4 and b = 0.4', function () {
      expect(calculateNumber('DIVIDE', -0.4, 0.4)).to.equal('Error');
    });

    it('should return -2 when a = -1.6 and b = -0.4', function () {
      expect(calculateNumber('DIVIDE', -1.6, 1.4)).to.equal(-2);
    });

    it('should return 1 when a = 2.5 and b = 2.5', function () {
      expect(calculateNumber('DIVIDE', 2.5, 2.5)).to.equal(1);
    });

    it('should return 0 when a = 0.1 and b = -0.1', function () {
      expect(calculateNumber('DIVIDE', 0.1, 0)).to.equal('Error');
    });
  });
});

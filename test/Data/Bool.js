import { Data, util } from '.';
import jsc from 'jsverify';
const { Bool } = Data;
const { error } = util;

describe('Data.Bool', () => {
  describe('and', () => {
    describe('(true, a)', () => {
      jsc.property('== a', 'bool', (a) =>
        Bool.and(true, a) === a
      );
    });
    describe('(false, a)', () => {
      jsc.property('== false', 'bool', (a) =>
        Bool.and(false, a) === false
      );
    });
    describe('(a, true)', () => {
      jsc.property('== a', 'bool', (a) =>
        Bool.and(a, true) === a
      );
    });
    describe('(a, false)', () => {
      jsc.property('== false', 'bool', (a) =>
        Bool.and(a, false) === false
      );
    });
    describe('(a, b)', () => {
      jsc.property('== (a)(b)', 'bool', 'bool', (a, b) =>
        Bool.and(a, b) === Bool.and(a)(b)
      );
    });
    xdescribe('(false, error("arb"))', () => {
      it('== false <- IMPOSSIBLE', () => {
        Bool.and(false, error('arb')).should.be.eql(false);
      });
    });
  });
  describe('or', () => {
    describe('(true, a)', () => {
      jsc.property('== true', 'bool', (a) =>
        Bool.or(true, a) === true
      );
    });
    describe('(false, a)', () => {
      jsc.property('== a', 'bool', (a) =>
        Bool.or(false, a) === a
      );
    });
    describe('(a, true)', () => {
      jsc.property('== true', 'bool', (a) =>
        Bool.or(a, true) === true
      );
    });
    describe('(a, false)', () => {
      jsc.property('== a', 'bool', (a) =>
        Bool.or(a, false) === a
      );
    });
    describe('(true, a)', () => {
      jsc.property('== true', 'bool', (a) =>
        Bool.or(true, a) === true
      );
    });
    describe('(a, b)', () => {
      jsc.property('== (a)(b)', 'bool', 'bool', (a, b) =>
        Bool.or(a, b) === Bool.or(a)(b)
      );
    });
  });
  describe('not', () => {
    describe('(false)', () => {
      it('== true', () => {
        Bool.not(false).should.be.eql(true);
      });
    });
    describe('(true)', () => {
      it('== false', () => {
        Bool.not(true).should.be.eql(false);
      });
    });
  });
  describe('otherwise', () => {
    it('== true', () => {
      Bool.otherwise.should.be.eql(true);
    });
  });
  describe('bool', () => {
    describe('(1, 2, true)', () => {
      it('== 2', () => {
        Bool.bool(1, 2, true).should.be.eql(2);
      });
    });
    describe('(1, 2, false)', () => {
      it('== 1', () => {
        Bool.bool(1, 2, false).should.be.eql(1);
      });
    });
    describe('(1)(2, false)', () => {
      it('== 1', () => {
        Bool.bool(1)(2, false).should.be.eql(1);
      });
    });
    describe('(1, 2)(false)', () => {
      it('== 1', () => {
        Bool.bool(1, 2)(false).should.be.eql(1);
      });
    });
    describe('(1)(2)(false)', () => {
      it('== 1', () => {
        Bool.bool(1)(2)(false).should.be.eql(1);
      });
    });
  });
});

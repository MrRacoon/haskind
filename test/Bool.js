import { Bool } from '../src/Data';
import { error } from '../src/util';

describe('Bool .', () => {
  describe('and', () => {
    describe('(true, true)', () => {
      it('== true', () => {
        Bool.and(true, true).should.be.eql(true);
      });
    });
    describe('(true, false)', () => {
      it('== false', () => {
        Bool.and(true, false).should.be.eql(false);
      });
    });
    describe('(false, true)', () => {
      it('== false', () => {
        Bool.and(false, true).should.be.eql(false);
      });
    });
    describe('(false, false)', () => {
      it('== false', () => {
        Bool.and(false, false).should.be.eql(false);
      });
    });
    xdescribe('(false, error("arb"))', () => {
      it('== false', () => {
        Bool.and(false, error('arb')).should.be.eql(false);
      });
    });
    describe('(true)(false)', () => {
      it('== false', () => {
        Bool.and(true)(false).should.be.eql(false);
      });
    });
    describe('(true)(true)', () => {
      it('== true', () => {
        Bool.and(true)(true).should.be.eql(true);
      });
    });
  });
  describe('or', () => {
    describe('(true, true)', () => {
      it('== true', () => {
        Bool.or(true, true).should.be.eql(true);
      });
    });
    describe('(true, false)', () => {
      it('== true', () => {
        Bool.or(true, false).should.be.eql(true);
      });
    });
    describe('(false, true)', () => {
      it('== true', () => {
        Bool.or(false, true).should.be.eql(true);
      });
    });
    describe('(false, false)', () => {
      it('== false', () => {
        Bool.or(false, false).should.be.eql(false);
      });
    });
    xdescribe('(true, error("arb"))', () => {
      it('== true', () => {
        Bool.or(true, error('arb')).should.be.eql(true);
      });
    });
    describe('(false)(true)', () => {
      it('== true', () => {
        Bool.or(false)(true).should.be.eql(true);
      });
    });
    describe('(true)(false)', () => {
      it('== true', () => {
        Bool.or(true)(false).should.be.eql(true);
      });
    });
    describe('(false)(false)', () => {
      it('== false', () => {
        Bool.or(false)(false).should.be.eql(false);
      });
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

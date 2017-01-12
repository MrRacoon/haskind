import { Data } from '.';
const { Ord } = Data;

const { LT, EQ, GT } = Ord;

const length = xs => xs.length;

describe('Ord', () => {
  describe('LT', () => {
    it('== -1', () => {
      LT.should.be.eql(-1);
    });
  });
  describe('EQ', () => {
    it('== 0', () => {
      EQ.should.be.eql(0);
    });
  });
  describe('GT', () => {
    it('== 1', () => {
      GT.should.be.eql(1);
    });
  });
  describe('compare', () => {
    describe('(1,2)', () => {
      it('== LT', () => {
        Ord.compare(1,2).should.be.eql(LT);
      });
    });
    describe('(1)(2)', () => {
      it('== LT', () => {
        Ord.compare(1)(2).should.be.eql(LT);
      });
    });
    describe('(1,1)', () => {
      it('== EQ', () => {
        Ord.compare(1,1).should.be.eql(EQ);
      });
    });
    describe('(1)(1)', () => {
      it('== EQ', () => {
        Ord.compare(1)(1).should.be.eql(EQ);
      });
    });
    describe('(2,1)', () => {
      it('== GT', () => {
        Ord.compare(2,1).should.be.eql(GT);
      });
    });
    describe('(2)(1)', () => {
      it('== GT', () => {
        Ord.compare(2)(1).should.be.eql(GT);
      });
    });
  });
  describe('lt', () => {
    describe('(1,2)', () => {
      it('== true', () => {
        Ord.lt(1,2).should.be.eql(true);
      });
    });
    describe('(1)(2)', () => {
      it('== true', () => {
        Ord.lt(1)(2).should.be.eql(true);
      });
    });
    describe('(1,1)', () => {
      it('== false', () => {
        Ord.lt(1,1).should.be.eql(false);
      });
    });
    describe('(1)(1)', () => {
      it('== false', () => {
        Ord.lt(1)(1).should.be.eql(false);
      });
    });
    describe('(2,1)', () => {
      it('== false', () => {
        Ord.lt(2,1).should.be.eql(false);
      });
    });
    describe('(2)(1)', () => {
      it('== false', () => {
        Ord.lt(2)(1).should.be.eql(false);
      });
    });
  });
  describe('le', () => {
    describe('(1,2)', () => {
      it('== true', () => {
        Ord.le(1,2).should.be.eql(true);
      });
    });
    describe('(1)(2)', () => {
      it('== true', () => {
        Ord.le(1)(2).should.be.eql(true);
      });
    });
    describe('(1,1)', () => {
      it('== true', () => {
        Ord.le(1,1).should.be.eql(true);
      });
    });
    describe('(1)(1)', () => {
      it('== true', () => {
        Ord.le(1)(1).should.be.eql(true);
      });
    });
    describe('(2,1)', () => {
      it('== false', () => {
        Ord.le(2,1).should.be.eql(false);
      });
    });
    describe('(2)(1)', () => {
      it('== false', () => {
        Ord.le(2)(1).should.be.eql(false);
      });
    });
  });
  describe('gt', () => {
    describe('(1,2)', () => {
      it('== false', () => {
        Ord.gt(1,2).should.be.eql(false);
      });
    });
    describe('(1)(2)', () => {
      it('== false', () => {
        Ord.gt(1)(2).should.be.eql(false);
      });
    });
    describe('(1,1)', () => {
      it('== false', () => {
        Ord.gt(1,1).should.be.eql(false);
      });
    });
    describe('(1)(1)', () => {
      it('== false', () => {
        Ord.gt(1)(1).should.be.eql(false);
      });
    });
    describe('(2,1)', () => {
      it('== true', () => {
        Ord.gt(2,1).should.be.eql(true);
      });
    });
    describe('(2)(1)', () => {
      it('== true', () => {
        Ord.gt(2)(1).should.be.eql(true);
      });
    });
  });
  describe('ge', () => {
    describe('(1,2)', () => {
      it('== false', () => {
        Ord.ge(1,2).should.be.eql(false);
      });
    });
    describe('(1)(2)', () => {
      it('== false', () => {
        Ord.ge(1)(2).should.be.eql(false);
      });
    });
    describe('(1,1)', () => {
      it('== true', () => {
        Ord.ge(1,1).should.be.eql(true);
      });
    });
    describe('(1)(1)', () => {
      it('== true', () => {
        Ord.ge(1)(1).should.be.eql(true);
      });
    });
    describe('(2,1)', () => {
      it('== true', () => {
        Ord.ge(2,1).should.be.eql(true);
      });
    });
    describe('(2)(1)', () => {
      it('== true', () => {
        Ord.ge(2)(1).should.be.eql(true);
      });
    });
  });
  describe('max', () => {
    describe('(1,2)', () => {
      it('== 2', () => {
        Ord.max(1,2).should.be.eql(2);
      });
    });
    describe('(2,1)', () => {
      it('== 2', () => {
        Ord.max(2,1).should.be.eql(2);
      });
    });
    describe('(1,1)', () => {
      it('== 1', () => {
        Ord.max(1,1).should.be.eql(1);
      });
    });
    describe('(1)(2)', () => {
      it('== 2', () => {
        Ord.max(1)(2).should.be.eql(2);
      });
    });
  });
  describe('min', () => {
    describe('(1,2)', () => {
      it('== 2', () => {
        Ord.min(1,2).should.be.eql(1);
      });
    });
    describe('(2,1)', () => {
      it('== 2', () => {
        Ord.min(2,1).should.be.eql(1);
      });
    });
    describe('(1,1)', () => {
      it('== 1', () => {
        Ord.min(1,1).should.be.eql(1);
      });
    });
    describe('(1)(2)', () => {
      it('== 2', () => {
        Ord.min(1)(2).should.be.eql(1);
      });
    });
  });
  describe('comparing', () => {
    describe('(length, [1,2,3], [])', () => {
      it('== GT', () => {
        Ord.comparing(length, [1,2,3], []).should.be.eql(GT);
      });
    });
    describe('(length, [], [1,2,3])', () => {
      it('== LT', () => {
        Ord.comparing(length, [], [1,2,3]).should.be.eql(LT);
      });
    });
    describe('(length, [1,2,3], [1,2,3])', () => {
      it('== EQ', () => {
        Ord.comparing(length, [1,2,3], [1,2,3]).should.be.eql(EQ);
      });
    });
    describe('(length, [1,2], [])', () => {
      it('== GT', () => {
        Ord.comparing(length, [1,2], []).should.be.eql(GT);
      });
    });
    describe('(length)([1,2], [])', () => {
      it('== GT', () => {
        Ord.comparing(length)([1,2], []).should.be.eql(GT);
      });
    });
    describe('(length, [1,2])([])', () => {
      it('== GT', () => {
        Ord.comparing(length, [1,2])([]).should.be.eql(GT);
      });
    });
    describe('(length)([1,2])([])', () => {
      it('== GT', () => {
        Ord.comparing(length)([1,2])([]).should.be.eql(GT);
      });
    });
  });
});

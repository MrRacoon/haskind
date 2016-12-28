import * as O from '../src/Ord';

const { LT, EQ, GT } = O;

const length = xs => xs.length;

xdescribe('Ord', () => {
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
        O.compare(1,2).should.be.eql(LT);
      });
    });
    describe('(1)(2)', () => {
      it('== LT', () => {
        O.compare(1)(2).should.be.eql(LT);
      });
    });
    describe('(1,1)', () => {
      it('== EQ', () => {
        O.compare(1,1).should.be.eql(EQ);
      });
    });
    describe('(1)(1)', () => {
      it('== EQ', () => {
        O.compare(1)(1).should.be.eql(EQ);
      });
    });
    describe('(2,1)', () => {
      it('== GT', () => {
        O.compare(2,1).should.be.eql(GT);
      });
    });
    describe('(2)(1)', () => {
      it('== GT', () => {
        O.compare(2)(1).should.be.eql(GT);
      });
    });
  });
  describe('lt', () => {
    describe('(1,2)', () => {
      it('== true', () => {
        O.lt(1,2).should.be.eql(true);
      });
    });
    describe('(1)(2)', () => {
      it('== true', () => {
        O.lt(1)(2).should.be.eql(true);
      });
    });
    describe('(1,1)', () => {
      it('== false', () => {
        O.lt(1,1).should.be.eql(false);
      });
    });
    describe('(1)(1)', () => {
      it('== false', () => {
        O.lt(1)(1).should.be.eql(false);
      });
    });
    describe('(2,1)', () => {
      it('== false', () => {
        O.lt(2,1).should.be.eql(false);
      });
    });
    describe('(2)(1)', () => {
      it('== false', () => {
        O.lt(2)(1).should.be.eql(false);
      });
    });
  });
  describe('le', () => {
    describe('(1,2)', () => {
      it('== true', () => {
        O.le(1,2).should.be.eql(true);
      });
    });
    describe('(1)(2)', () => {
      it('== true', () => {
        O.le(1)(2).should.be.eql(true);
      });
    });
    describe('(1,1)', () => {
      it('== true', () => {
        O.le(1,1).should.be.eql(true);
      });
    });
    describe('(1)(1)', () => {
      it('== true', () => {
        O.le(1)(1).should.be.eql(true);
      });
    });
    describe('(2,1)', () => {
      it('== false', () => {
        O.le(2,1).should.be.eql(false);
      });
    });
    describe('(2)(1)', () => {
      it('== false', () => {
        O.le(2)(1).should.be.eql(false);
      });
    });
  });
  describe('gt', () => {
    describe('(1,2)', () => {
      it('== false', () => {
        O.gt(1,2).should.be.eql(false);
      });
    });
    describe('(1)(2)', () => {
      it('== false', () => {
        O.gt(1)(2).should.be.eql(false);
      });
    });
    describe('(1,1)', () => {
      it('== false', () => {
        O.gt(1,1).should.be.eql(false);
      });
    });
    describe('(1)(1)', () => {
      it('== false', () => {
        O.gt(1)(1).should.be.eql(false);
      });
    });
    describe('(2,1)', () => {
      it('== true', () => {
        O.gt(2,1).should.be.eql(true);
      });
    });
    describe('(2)(1)', () => {
      it('== true', () => {
        O.gt(2)(1).should.be.eql(true);
      });
    });
  });
  describe('ge', () => {
    describe('(1,2)', () => {
      it('== false', () => {
        O.ge(1,2).should.be.eql(false);
      });
    });
    describe('(1)(2)', () => {
      it('== false', () => {
        O.ge(1)(2).should.be.eql(false);
      });
    });
    describe('(1,1)', () => {
      it('== true', () => {
        O.ge(1,1).should.be.eql(true);
      });
    });
    describe('(1)(1)', () => {
      it('== true', () => {
        O.ge(1)(1).should.be.eql(true);
      });
    });
    describe('(2,1)', () => {
      it('== true', () => {
        O.ge(2,1).should.be.eql(true);
      });
    });
    describe('(2)(1)', () => {
      it('== true', () => {
        O.ge(2)(1).should.be.eql(true);
      });
    });
  });
  describe('max', () => {
    describe('(1,2)', () => {
      it('== 2', () => {
        O.max(1,2).should.be.eql(2);
      });
    });
    describe('(2,1)', () => {
      it('== 2', () => {
        O.max(2,1).should.be.eql(2);
      });
    });
    describe('(1,1)', () => {
      it('== 1', () => {
        O.max(1,1).should.be.eql(1);
      });
    });
    describe('(1)(2)', () => {
      it('== 2', () => {
        O.max(1)(2).should.be.eql(2);
      });
    });
  });
  describe('min', () => {
    describe('(1,2)', () => {
      it('== 2', () => {
        O.min(1,2).should.be.eql(1);
      });
    });
    describe('(2,1)', () => {
      it('== 2', () => {
        O.min(2,1).should.be.eql(1);
      });
    });
    describe('(1,1)', () => {
      it('== 1', () => {
        O.min(1,1).should.be.eql(1);
      });
    });
    describe('(1)(2)', () => {
      it('== 2', () => {
        O.min(1)(2).should.be.eql(1);
      });
    });
  });
  describe('comparing', () => {
    describe('(length, [1,2,3], [])', () => {
      it('== GT', () => {
        O.comparing(length, [1,2,3], []).should.be.eql(GT);
      });
    });
    describe('(length, [], [1,2,3])', () => {
      it('== LT', () => {
        O.comparing(length, [], [1,2,3]).should.be.eql(LT);
      });
    });
    describe('(length, [1,2,3], [1,2,3])', () => {
      it('== EQ', () => {
        O.comparing(length, [1,2,3], [1,2,3]).should.be.eql(EQ);
      });
    });
    describe('(length, [1,2], [])', () => {
      it('== GT', () => {
        O.comparing(length, [1,2], []).should.be.eql(GT);
      });
    });
    describe('(length)([1,2], [])', () => {
      it('== GT', () => {
        O.comparing(length)([1,2], []).should.be.eql(GT);
      });
    });
    describe('(length, [1,2])([])', () => {
      it('== GT', () => {
        O.comparing(length, [1,2])([]).should.be.eql(GT);
      });
    });
    describe('(length)([1,2])([])', () => {
      it('== GT', () => {
        O.comparing(length)([1,2])([]).should.be.eql(GT);
      });
    });
  });
});

import { Data } from '.';
const { Num } = Data;

describe('Data.Num', () => {
  // subtract :: Num a => a -> a -> a
  describe('add', () => {
    describe('(1, 0)', () => {
      it('== 1', () => {
        Num.add(1, 0).should.be.eql(1);
      });
    });
    describe('(1, 1)', () => {
      it('== 2', () => {
        Num.add(1, 1).should.be.eql(2);
      });
    });
    describe('(3, 10)', () => {
      it('== 13', () => {
        Num.add(3, 10).should.be.eql(13);
      });
    });
    describe('(3)(10)', () => {
      it('== 13', () => {
        Num.add(3)(10).should.be.eql(13);
      });
    });
  });
  describe('subtract', () => {
    describe('(1, 0)', () => {
      it('== -1', () => {
        Num.subtract(1, 0).should.be.eql(-1);
      });
    });
    describe('(1, 1)', () => {
      it('== 0', () => {
        Num.subtract(1, 1).should.be.eql(0);
      });
    });
    describe('(3, 10)', () => {
      it('== 7', () => {
        Num.subtract(3, 10).should.be.eql(7);
      });
    });
    describe('(3)(10)', () => {
      it('== 7', () => {
        Num.subtract(3)(10).should.be.eql(7);
      });
    });
  });
  // even :: Integral a => a -> Bool
  describe('even', () => {
    describe('(0)', () => {
      it('== true', () => {
        Num.even(0).should.be.eql(true);
      });
    });
    describe('(1)', () => {
      it('== false', () => {
        Num.even(1).should.be.eql(false);
      });
    });
    describe('(2)', () => {
      it('== true', () => {
        Num.even(2).should.be.eql(true);
      });
    });
    describe('(3)', () => {
      it('== false', () => {
        Num.even(3).should.be.eql(false);
      });
    });
  });
  // odd :: Integral a => a -> Bool
  describe('odd', () => {
    describe('(0)', () => {
      it('== false', () => {
        Num.odd(0).should.be.eql(false);
      });
    });
    describe('(1)', () => {
      it('== true', () => {
        Num.odd(1).should.be.eql(true);
      });
    });
    describe('(2)', () => {
      it('== false', () => {
        Num.odd(2).should.be.eql(false);
      });
    });
    describe('(3)', () => {
      it('== true', () => {
        Num.odd(3).should.be.eql(true);
      });
    });
  });
  // gcd :: Integral a => a -> a -> a
  xdescribe('gcd', () => {
    describe('(1, 7)', () => {
      it('== 1', () => {
        Num.gcd(1, 7).should.be.eql(1);
      });
    });
    describe('(2, 8)', () => {
      it('== 2', () => {
        Num.gcd(2, 8).should.be.eql(2);
      });
    });
    describe('(100, 60)', () => {
      it('== 20', () => {
        Num.gcd(100, 60).should.be.eql(20);
      });
    });
    describe('(100)(60)', () => {
      it('== 20', () => {
        Num.gcd(100)(60).should.be.eql(20);
      });
    });
  });
  // lcm :: Integral a => a -> a -> a
  xdescribe('lcm', () => {
    describe('(1, 10)', () => {
      it('== 10', () => {
        Num.lcm(1, 10).should.be.eql(10);
      });
    });
    describe('(2, 3)', () => {
      it('== 6', () => {
        Num.lcm(2, 3).should.be.eql(6);
      });
    });
    describe('(100, 60)', () => {
      it('== 300', () => {
        Num.lcm(100, 60).should.be.eql(300);
      });
    });
    describe('(100)(60)', () => {
      it('== 300', () => {
        Num.lcm(100)(60).should.be.eql(300);
      });
    });
  });
  // (^) :: (Num a, Integral b) => a -> b -> a
  // (^^) :: (Fractional a, Integral b) => a -> b -> a
});

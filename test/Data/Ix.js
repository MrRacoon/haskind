import jsc from 'jsverify';
import { Data } from '.';
const { Ix } = Data;

describe('Data.Ix', () => {
  describe('range', () => {
    describe('([a, b]).length', () => {
      jsc.property('== (a<=b ? b-a+1 : 0)', 'nat', 'nat', (a, b) =>
        Ix.range([a, b]).length === (a <= b ? b - a + 1 : 0)
      );
    });
    describe('when (a <= b) then ([a, b]).indexOf(a) > -1', () => {
      jsc.property('== true', 'nat', 'nat', (a, b) =>
        a <= b
          ? Ix.range([a, b]).indexOf(a) > -1
          : Ix.range([b, a]).indexOf(a) > -1
      );
    });
    describe('when (a <= b) then ([a, b]).indexOf(b) > -1', () => {
      jsc.property('== true', 'nat', 'nat', (a, b) =>
        a <= b
          ? Ix.range([a, b]).indexOf(b) > -1
          : Ix.range([b, a]).indexOf(b) > -1
      );
    });
    describe('when (a < b) then ([b, a])', () => {
      jsc.property('== []', 'nat', 'nat', (a, b) =>
        a === b
          ? true
          : Ix.range([a, b].sort((x, y) => y - x)).length === 0
      );
    });
    describe('([0, 0])', () => {
      it('== [0]', () => {
        Ix.range([0, 0]).should.be.eql([0]);
      });
    });
    describe('([-1, 0])', () => {
      it('== [-1, 0]', () => {
        Ix.range([-1, 0]).should.be.eql([-1, 0]);
      });
    });
    describe('([0, 10])', () => {
      it('== [0,1,2,3,4,5,6,7,8,9,10]', () => {
        Ix.range([0, 10]).should.be.eql([0,1,2,3,4,5,6,7,8,9,10]);
      });
    });
    describe('([3, 10])', () => {
      it('== [3,4,5,6,7,8,9,10]', () => {
        Ix.range([3, 10]).should.be.eql([3,4,5,6,7,8,9,10]);
      });
    });
    describe('([10, 3])', () => {
      it('== []', () => {
        Ix.range([10, 3]).should.be.eql([]);
      });
    });
  });
  describe('index', () => {
    describe('([a, b], c)', () => {
      jsc.property('== c - a', 'nat', 'nat', 'nat', (a, b, c) => {
        if (Ix.inRange([a, b], c)) {
          return Ix.index([a, b], c) === c - a;
        }
        return true;
      });
    });
    describe('([0, 0], 0)', () => {
      it('== 0', () => {
        Ix.index([0,0], 0).should.be.eql(0);
      });
    });
    describe('([0, 0])(0)', () => {
      it('== 0', () => {
        Ix.index([0,0])(0).should.be.eql(0);
      });
    });
    describe('([3, 9], 3)', () => {
      it('== 0', () => {
        Ix.index([3,9], 3).should.be.eql(0);
      });
    });
    describe('([3, 9], 4)', () => {
      it('== 1', () => {
        Ix.index([3,9], 4).should.be.eql(1);
      });
    });
  });
  describe('inRange', () => {
    describe('([0, 0], 0)', () => {
      it('== true', () => {
        Ix.inRange([0,0], 0).should.be.eql(true);
      });
    });
    describe('([0, 0])(0)', () => {
      it('== true', () => {
        Ix.inRange([0,0])(0).should.be.eql(true);
      });
    });
    describe('([0, 0], -1)', () => {
      it('== false', () => {
        Ix.inRange([0,-1], 0).should.be.eql(false);
      });
    });
    describe('([0, 0], 1)', () => {
      it('== false', () => {
        Ix.inRange([0,0], 1).should.be.eql(false);
      });
    });
    describe('([0, 1], 1)', () => {
      it('== true', () => {
        Ix.inRange([0,1], 1).should.be.eql(true);
      });
    });
  });
  describe('rangeSize', () => {
    describe('([0, 0])', () => {
      it('== 0', () => {
        Ix.rangeSize([0,0]).should.be.eql(0);
      });
    });
    describe('([0, 5])', () => {
      it('== 5', () => {
        Ix.rangeSize([0,5]).should.be.eql(5);
      });
    });
    describe('([1, 5])', () => {
      it('== 4', () => {
        Ix.rangeSize([1,5]).should.be.eql(4);
      });
    });
  });
});

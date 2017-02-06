import { Data } from '.';
import jsc from 'jsverify';

const { Enum } = Data;

describe('Data.Enum', () => {
  // succ :: a -> a
  describe('succ', () => {
    describe('(0)', () => {
      it('== 1', () => {
        Enum.succ(0).should.be.eql(1);
      });
    });
    describe('(1)', () => {
      it('== 2', () => {
        Enum.succ(1).should.be.eql(2);
      });
    });
    describe('(2)', () => {
      it('== 3', () => {
        Enum.succ(2).should.be.eql(3);
      });
    });
  });
  // pred :: a -> a
  describe('pred', () => {
    describe('(0)', () => {
      it('== -1', () => {
        Enum.pred(0).should.be.eql(-1);
      });
    });
    describe('(1)', () => {
      it('== 0', () => {
        Enum.pred(1).should.be.eql(0);
      });
    });
    describe('(2)', () => {
      it('== 1', () => {
        Enum.pred(2).should.be.eql(1);
      });
    });
  });
  // toEnum :: Int -> a
  describe('toEnum', () => {
    describe('(60)', () => {
      it('== "<"', () => {
        Enum.toEnum(60).should.be.eql('<');
      });
    });
    describe('(90)', () => {
      it('== "Z"', () => {
        Enum.toEnum(90).should.be.eql('Z');
      });
    });
    xdescribe('(fromEnum(a))', () => {
      jsc.property('== a', 'char', (a) => {
        Enum.toEnum(Enum.fromEnum(a)).should.be.eql(a);
      });
    });
  });
  // fromEnum :: a -> Int
  describe('fromEnum', () => {
    describe('("<")', () => {
      it('== 60', () => {
        Enum.fromEnum('<').should.be.eql(60);
      });
    });
    describe('("Z")', () => {
      it('== 90', () => {
        Enum.fromEnum('Z').should.be.eql(90);
      });
    });
    xdescribe('(toEnum(a))', () => {
      jsc.property('== a', 'char', (a) => {
        Enum.fromEnum(Enum.toEnum(a)).should.be.eql(a);
      });
    });
    // Prelude> fromEnum 'a'
    // 97
    // Prelude> fromEnum 'A'
    // 65
    // Prelude> fromEnum True
    // 1
    // Prelude> fromEnum False
    // 0
    // Prelude> fromEnum 1
    // 1
  });
  // enumFrom :: a -> [a]
  // enumFromThen :: a -> a -> [a]
  // enumFromTo :: a -> a -> [a]
  // enumFromThenTo :: a -> a -> a -> [a]
});

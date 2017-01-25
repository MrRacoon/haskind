import { Data } from '.';

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
  describe('description', () => {
    // Prelude> toEnum 1 :: Char
    // '\SOH'
    // Prelude> toEnum 60 :: Char
    // '<'
    // Prelude> toEnum 90 :: Char
    // 'Z'
    // Prelude> toEnum 91 :: Char
    // '['
    // Prelude> toEnum 91 :: Char
    // '['

  });
  // fromEnum :: a -> Int
  describe('fromEnum', () => {
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

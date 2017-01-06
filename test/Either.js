import { Either } from '../src/Data';

const { Left, Right } = Either;

const inc = x => x + 1;

describe('Either.', () => {
  describe('Left', () => {
    describe('("value")', () => {
      it('== { left: "value" }', () => {
        Either.Left('value').should.be.eql({ left: 'value' });
      });
    });
    describe('(4)', () => {
      it('== { left: 4 }', () => {
        Either.Left(4).should.be.eql({ left: 4 });
      });
    });
  });
  describe('Right', () => {
    describe('("value")', () => {
      it('== { right: "value" }', () => {
        Either.Right('value').should.be.eql({ right: 'value' });
      });
    });
    describe('(4)', () => {
      it('== { right: 4 }', () => {
        Either.Right(4).should.be.eql({ right: 4 });
      });
    });
  });
  describe('either', () => {
    describe('(inc, inc, Left(4))', () => {
      it('== 5', () => {
        Either.either(inc, inc, Left(4)).should.be.eql(5);
      });
    });
    describe('(inc, inc, Right(8))', () => {
      it('== 9', () => {
        Either.either(inc, inc, Right(8)).should.be.eql(9);
      });
    });
    describe('(inc)(inc, Right(8))', () => {
      it('== 9', () => {
        Either.either(inc)(inc, Right(8)).should.be.eql(9);
      });
    });
    describe('(inc, inc)(Right(8))', () => {
      it('== 9', () => {
        Either.either(inc, inc)(Right(8)).should.be.eql(9);
      });
    });
    describe('(inc)(inc)(Right(8))', () => {
      it('== 9', () => {
        Either.either(inc)(inc)(Right(8)).should.be.eql(9);
      });
    });
  });
  describe('lefts', () => {
    describe('([Left(1), Right(2), Left(3)])', () => {
      it('== [1,3]', () => {
        Either.lefts([Left(1), Right(2), Left(3)]).should.be.eql([1,3]);
      });
    });
  });
  describe('rights', () => {
    describe('([Left(1), Right(2), Left(3)])', () => {
      it('== [2]', () => {
        Either.rights([Left(1), Right(2), Left(3)]).should.be.eql([2]);
      });
    });
  });
  describe('isLeft', () => {
    describe('(Left(42))', () => {
      it('== true', () => {
        Either.isLeft(Left(42)).should.be.eql(true);
      });
    });
    describe('(Right(42))', () => {
      it('== false', () => {
        Either.isLeft(Right(42)).should.be.eql(false);
      });
    });
  });
  describe('isRight', () => {
    describe('(Left(42))', () => {
      it('== false', () => {
        Either.isRight(Left(42)).should.be.eql(false);
      });
    });
    describe('(Right(42))', () => {
      it('== true', () => {
        Either.isRight(Right(42)).should.be.eql(true);
      });
    });
  });
  describe('partitionEithers', () => {
    describe('([Left(1), Right(2), Left(3)])', () => {
      it('== [[1,3], [2]]', () => {
        Either.partitionEithers([Left(1), Right(2), Left(3)]).should.be.eql([[1,3], [2]]);
      });
    });
  });
});

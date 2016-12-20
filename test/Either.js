// import should from 'should'
import * as E from '../src/Either'

const { Left, Right } = E

const inc = x => x + 1

xdescribe('Either', () => {
  describe('either', () => {
    describe('(inc, inc, Left(4))', () => {
      it('== 5', () => {
        E.either(inc, inc, Left(4)).should.be.eql(5)
      })
    })
    describe('(inc, inc, Right(8))', () => {
      it('== 9', () => {
        E.either(inc, inc, Right(8)).should.be.eql(9)
      })
    })
    describe('(inc)(inc, Right(8))', () => {
      it('== 9', () => {
        E.either(inc)(inc, Right(8)).should.be.eql(9)
      })
    })
    describe('(inc, inc)(Right(8))', () => {
      it('== 9', () => {
        E.either(inc, inc)(Right(8)).should.be.eql(9)
      })
    })
    describe('(inc)(inc)(Right(8))', () => {
      it('== 9', () => {
        E.either(inc)(inc)(Right(8)).should.be.eql(9)
      })
    })
  })
  describe('lefts', () => {
    describe('([Left(1), Right(2), Left(3)])', () => {
      it('== [1,3]', () => {
        E.lefts([Left(1), Right(2), Left(3)]).should.be.eql([1,3])
      })
    })
  })
  describe('rights', () => {
    describe('([Left(1), Right(2), Left(3)])', () => {
      it('== [2]', () => {
        E.rights([Left(1), Right(2), Left(3)]).should.be.eql([2])
      })
    })
  })
  describe('isLeft', () => {
    describe('(Left(42))', () => {
      it('== true', () => {
        E.isLeft(42).should.be.eql(true)
      })
    })
    describe('(Right(42))', () => {
      it('== false', () => {
        E.isLeft(42).should.be.eql(false)
      })
    })
  })
  describe('isRight', () => {
    describe('(Left(42))', () => {
      it('== false', () => {
        E.isLeft(42).should.be.eql(false)
      })
    })
    describe('(Right(42))', () => {
      it('== true', () => {
        E.isLeft(42).should.be.eql(true)
      })
    })
  })
  describe('partitionEithers', () => {
    describe('([Left(1), Right(2), Left(3)])', () => {
      it('== [[1,3], [2]]', () => {
        E.partitionEithers([Left(1), Right(2), Left(3)]).should.be.eql([[1,3], [2]])
      })
    })
  })
})

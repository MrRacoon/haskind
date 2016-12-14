// import should from 'should'
import * as E from '../src/Either'

const { Left, Right } = E

const inc = x => x + 1

describe('Either', () => {
  describe('either', () => {
    it('(inc, inc, Left(4))', () => {
      E.either(inc, inc, Left(4)).should.be.eql(5)
    })
    it('(inc, inc, Right(8))', () => {
      E.either(inc, inc, Right(8)).should.be.eql(9)
    })
  })
  describe('lefts', () => {
    it('([Left(1), Right(2), Left(3)])', () => {
      E.lefts([Left(1), Right(2), Left(3)]).should.be.eql([1,3])
    })
  })
  describe('rights', () => {
    it('([Left(1), Right(2), Left(3)])', () => {
      E.rights([Left(1), Right(2), Left(3)]).should.be.eql([2])
    })
  })
  describe('isLeft', () => {
    it('(Left(42))', () => {
      E.isLeft(42).should.be.eql(true)
    })
    it('(Right(42))', () => {
      E.isLeft(42).should.be.eql(false)
    })
  })
  describe('isRight', () => {
    it('(Left(42))', () => {
      E.isLeft(42).should.be.eql(false)
    })
    it('(Right(42))', () => {
      E.isLeft(42).should.be.eql(true)
    })
  })
  describe('partitionEithers', () => {
    it('([Left(1), Right(2), Left(3)])', () => {
      E.partitionEithers([Left(1), Right(2), Left(3)]).should.be.eql([[1,3], [2]])
    })
  })
})

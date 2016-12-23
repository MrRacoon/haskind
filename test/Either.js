// import should from 'should'
import * as E from '../src/Either'

const { Left, Right } = E

const inc = x => x + 1

xdescribe('Either', () => {
  describe('Left', () => {
    describe('("value")', () => {
      it('== { left: "value" }', () => {
        E.Left('value').should.be.eql({ left: 'value' })
      })
    })
    describe('(4)', () => {
      it('== { left: 4 }', () => {
        E.Left(4).should.be.eql({ left: 4 })
      })
    })
  })
  describe('Right', () => {
    describe('("value")', () => {
      it('== { right: "value" }', () => {
        E.Right('value').should.be.eql({ right: 'value' })
      })
    })
    describe('(4)', () => {
      it('== { right: 4 }', () => {
        E.Right(4).should.be.eql({ right: 4 })
      })
    })
  })
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

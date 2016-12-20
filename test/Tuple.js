// import should from 'should'
import * as T from '../src/Tuple'


describe('Tuple', () => {
  describe('fst', () => {
    describe('([1,2])', () => {
      it('== 1', () => {
        T.fst([1,2]).should.be.eql(1)
      })
    })
    describe('([2,1])', () => {
      it('== 2', () => {
        T.fst([2,1]).should.be.eql(2)
      })
    })
  })
  describe('snd', () => {
    describe('([1,2])', () => {
      it('== 2', () => {
        T.snd([1,2]).should.be.eql(2)
      })
    })
    describe('([2,1])', () => {
      it('== 1', () => {
        T.snd([2,1]).should.be.eql(1)
      })
    })
  })
  describe('curry', () => {
  })
  describe('uncurry', () => {
  })
  describe('swap', () => {
    describe('[1,2]', () => {
      it('== [2,1]', () => {
        T.swap([1,2]).should.be.eql([2,1])
      })
    })
    describe('[2,1]', () => {
      it('== [1,2]', () => {
        T.swap([2,1]).should.be.eql([1,2])
      })
    })
  })
})

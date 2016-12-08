import should from 'should'
import * as U from '../src/util'

describe('util', () => {
  describe('id', () => {
    it('(1)', () => {
      U.id(1).should.be.eql(1)
    })
    it('(2.1)', () => {
      U.id(2).should.be.eql(2)
    })
    it('("2")', () => {
      U.id('2').should.be.eql('2')
    })
    it('(true)', () => {
      U.id(true).should.be.eql(true)
    })
    it('(null)', () => {
      should(U.id(null)).be.eql(null)
    })
    it('(undefined)', () => {
      should(U.id(undefined)).be.eql(undefined)
    })
    it('(NaN)', () => {
      should(U.id(NaN)).be.eql(NaN)
    })
    it('(Infinity)', () => {
      should(U.id(Infinity)).be.eql(Infinity)
    })
  })
  describe('error', () => {
    it('("Type.McTypeface")', () => {
      (() => U.error('Type.McTypeface')).should.throw('haskind.Type.McTypeface')
    })
    it('("arb")', () => {
      (() => U.error('arb')).should.throw('haskind.arb')
    })
  })
})

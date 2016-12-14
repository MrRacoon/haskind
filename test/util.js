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
  describe('_curry', () => {
    it('(add)(a,b)', () => {
      U._curry((x,y)=>x+y)(3,7).should.be.eql(10)
    })
    it('(add)(a)(b)', () => {
      U._curry((x,y)=>x+y)(3)(7).should.be.eql(10)
    })
    it('(map)(a,b)', () => {
      U._curry((f,ls)=>ls.map(f))(a=>a+1,[0,1,2]).should.be.eql([1,2,3])
    })
    it('(map)(a)(b)', () => {
      U._curry((f,ls)=>ls.map(f))(a=>a+1)([0,1,2]).should.be.eql([1,2,3])
    })
    it('(filter)(a,b)', () => {
      U._curry((p,ls)=>ls.filter(p))(a=>a,[0,1,2]).should.be.eql([1,2])
    })
    it('(filter)(a)(b)', () => {
      U._curry((p,ls)=>ls.filter(p))(a=>a)([0,1,2]).should.be.eql([1,2])
    })
    it('(reduce)(a,b,c)', () => {
      U._curry((f,i,ls)=>ls.reduce(f,i))((a,b)=>a+b,0,[0,1,2]).should.be.eql(3)
    })
    it('(reduce)(a,b)(c)', () => {
      U._curry((f,i,ls)=>ls.reduce(f,i))((a,b)=>a+b,0)([0,1,2]).should.be.eql(3)
    })
    it('(reduce)(a)(b,c)', () => {
      U._curry((f,i,ls)=>ls.reduce(f,i))((a,b)=>a+b)(0,[0,1,2]).should.be.eql(3)
    })
    it('(reduce)(a)(b)(c)', () => {
      U._curry((f,i,ls)=>ls.reduce(f,i))((a,b)=>a+b)(0)([0,1,2]).should.be.eql(3)
    })
  })
})

import should from 'should'
import * as U from '../src/util'

describe('util', () => {
  describe('id', () => {
    describe('(1)', () => {
      it('== 1', () => {
        U.id(1).should.be.eql(1)
      })
    })
    describe('(2.1)', () => {
      it('== 2', () => {
        U.id(2).should.be.eql(2)
      })
    })
    describe('("2")', () => {
      it('== 2', () => {
        U.id('2').should.be.eql('2')
      })
    })
    describe('(true)', () => {
      it('== true', () => {
        U.id(true).should.be.eql(true)
      })
    })
    describe('(null)', () => {
      it('== null', () => {
        should(U.id(null)).be.eql(null)
      })
    })
    describe('(undefined)', () => {
      it('== undefined', () => {
        should(U.id(undefined)).be.eql(undefined)
      })
    })
    describe('(NaN)', () => {
      it('== NaN', () => {
        should(U.id(NaN)).be.eql(NaN)
      })
    })
    describe('(Infinity)', () => {
      it('== Infinity', () => {
        should(U.id(Infinity)).be.eql(Infinity)
      })
    })
  })
  describe('error', () => {
    describe('("Type.McTypeface")', () => {
      it('errors: haskind.Type.McTypeface', () => {
        (() => U.error('Type.McTypeface')).should.throw('haskind.Type.McTypeface')
      })
    })
    describe('("arb")', () => {
      it('error: haskind.arb', () => {
        (() => U.error('arb')).should.throw('haskind.arb')
      })
    })
  })
  describe('_curry', () => {
    describe('(add)(a,b)', () => {
      it('== 10', () => {
        U._curry((x,y)=>x+y)(3,7).should.be.eql(10)
      })
    })
    describe('(add)(a)(b)', () => {
      it('== 10', () => {
        U._curry((x,y)=>x+y)(3)(7).should.be.eql(10)
      })
    })
    describe('(map)(a,b)', () => {
      it('== [1,2,3]', () => {
        U._curry((f,ls)=>ls.map(f))(a=>a+1,[0,1,2]).should.be.eql([1,2,3])
      })
    })
    describe('(map)(a)(b)', () => {
      it('== [1,2,3]', () => {
        U._curry((f,ls)=>ls.map(f))(a=>a+1)([0,1,2]).should.be.eql([1,2,3])
      })
    })
    describe('(filter)(a,b)', () => {
      it('== [1,2]', () => {
        U._curry((p,ls)=>ls.filter(p))(a=>a,[0,1,2]).should.be.eql([1,2])
      })
    })
    describe('(filter)(a)(b)', () => {
      it('== [1,2]', () => {
        U._curry((p,ls)=>ls.filter(p))(a=>a)([0,1,2]).should.be.eql([1,2])
      })
    })
    describe('(reduce)(a,b,c)', () => {
      it('== 3', () => {
        U._curry((f,i,ls)=>ls.reduce(f,i))((a,b)=>a+b,0,[0,1,2]).should.be.eql(3)
      })
    })
    describe('(reduce)(a,b)(c)', () => {
      it('== 3', () => {
        U._curry((f,i,ls)=>ls.reduce(f,i))((a,b)=>a+b,0)([0,1,2]).should.be.eql(3)
      })
    })
    describe('(reduce)(a)(b,c)', () => {
      it('== 3', () => {
        U._curry((f,i,ls)=>ls.reduce(f,i))((a,b)=>a+b)(0,[0,1,2]).should.be.eql(3)
      })
    })
    describe('(reduce)(a)(b)(c)', () => {
      it('== 3', () => {
        U._curry((f,i,ls)=>ls.reduce(f,i))((a,b)=>a+b)(0)([0,1,2]).should.be.eql(3)
      })
    })
  })
})

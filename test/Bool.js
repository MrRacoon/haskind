import should from 'should'
import * as B from '../src/Bool'
import { error } from '../src/util'

describe('Bool', () => {
  describe('and', () => {
    describe('(true, true)', () => {
      it('== true', () => {
        B.and(true, true).should.be.eql(true)
      })
    })
    describe('(true, false)', () => {
      it('== false', () => {
        B.and(true, false).should.be.eql(false)
      })
    })
    describe('(false, true)', () => {
      it('== false', () => {
        B.and(false, true).should.be.eql(false)
      })
    })
    describe('(false, false)', () => {
      it('== false', () => {
        B.and(false, false).should.be.eql(false)
      })
    })
    describe('(false, error("arb"))', () => {
      it('== false', () => {
        B.and(false, error('arb')).should.be.eql(false)
      })
    })
    describe('(true)(false)', () => {
      it('== false', () => {
        B.and(true)(false).should.be.eql(false)
      })
    })
    describe('(true)(true)', () => {
      it('== true', () => {
        B.and(true)(true).should.be.eql(true)
      })
    })
  })
  describe('or', () => {
    describe('(true, true)', () => {
      it('== true', () => {
        B.or(true, true).should.be.eql(true)
      })
    })
    describe('(true, false)', () => {
      it('== true', () => {
        B.or(true, false).should.be.eql(true)
      })
    })
    describe('(false, true)', () => {
      it('== true', () => {
        B.or(false, true).should.be.eql(true)
      })
    })
    describe('(false, false)', () => {
      it('== false', () => {
        B.or(false, false).should.be.eql(false)
      })
    })
    describe('(false, error("arb"))', () => {
      it('errors: arb', () => {
        should(() => B.or(true, error('arb'))).to.throw('haskind.arb')
      })
    })
    describe('(false)(true)', () => {
      it('== true', () => {
        B.or(false)(true).should.be.eql(true)
      })
    })
    describe('(true)(false)', () => {
      it('== true', () => {
        B.or(true)(false).should.be.eql(true)
      })
    })
    describe('(false)(false)', () => {
      it('== false', () => {
        B.or(false)(false).should.be.eql(false)
      })
    })
  })
  describe('not', () => {
    describe('(false)', () => {
      it('== true', () => {
        B.not(false).should.be.eql(true)
      })
    })
    describe('(true)', () => {
      it('== false', () => {
        B.not(true).should.be.eql(false)
      })
    })
  })
  describe('otherwise', () => {
    it('== true', () => {
      B.otherwise.should.be.eql(true)
    })
  })
  describe('bool', () => {
    describe('(1, 2, true)', () => {
      it('== 2', () => {
        B.bool(1, 2, true).should.be.eql(2)
      })
    })
    describe('(1, 2, false)', () => {
      it('== 1', () => {
        B.bool(1, 2, false).should.be.eql(1)
      })
    })
  })
})

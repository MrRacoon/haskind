import * as B from '../src/Bool'

const { otherwise, not } = B

describe('Bool', () => {
  describe('not', () => {
    describe('(false)', () => {
      it('== true', () => {
        not(false).should.be.eql(true)
      })
    })
    describe('(true)', () => {
      it('== false', () => {
        not(true).should.be.eql(false)
      })
    })
  })
  describe('otherwise', () => {
    it('== true', () => {
      otherwise.should.be.eql(true)
    })
  })
})

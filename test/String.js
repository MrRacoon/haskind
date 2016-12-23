import * as S from '../src/String'

xdescribe('String', () => {
  describe('isString', () => {
    describe('("string")', () => {
      it('== true', () => {
        S.isString('string').should.be.eql(true)
      })
    })
    describe('(["s", "t", "r", "i", "n", "g"])', () => {
      it('== false', () => {
        S.isString(['s', 't', 'r', 'i', 'n', 'g']).should.be.eql(true)
      })
    })
  })
  describe('fromString', () => {
    describe('("string")', () => {
      it('== ["s", "t", "r", "i", "n", "g"]', () => {
        S.fromString('string').should.be.eql(['s', 't', 'r', 'i', 'n', 'g'])
      })
    })
  })
  describe('toString', () => {
    describe('(["s", "t", "r", "i", "n", "g"])', () => {
      it('== "string"', () => {
        S.toString(['s', 't', 'r', 'i', 'n', 'g']).should.be.eql('string')
      })
    })
  })
})

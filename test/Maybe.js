// import should from 'should'
import * as M from '../src/Maybe'
import { id } from '../src/util'

const { Just, Nothing } = M

describe('Maybe', () => {
  describe('maybe', () => {
    it('(1, id, Just(4))', () => {
      M.maybe(1, id, Just(4)).should.eql(4)
    })
    it('(1, id, Nothing())', () => {
      M.maybe(1, id, Nothing()).should.eql(1)
    })
    it('(1, inc, Just(4))', () => {
      M.maybe(1, x => x+1, Just(4)).should.eql(5)
    })
    it('(1, inc, Nothing())', () => {
      M.maybe(1, x => x+1, Nothing()).should.eql(1)
    })
  })
  describe('isJust', () => {
    it('(Just(42))', () => {
      M.isJust(Just(42)).should.be.eql(true)
    })
    it('(Nothing())', () => {
      M.isJust(Nothing()).should.be.eql(false)
    })
  })
  describe('isNothing', () => {
    it('(Just(42))', () => {
      M.isNothing(Just(42)).should.be.eql(false)
    })
    it('(Nothing())', () => {
      M.isNothing(Nothing()).should.be.eql(true)
    })
  })
  describe('fromJust', () => {
    it('(Just(42))', () => {
      M.fromJust(Just(42)).should.be.eql(42)
    })
    it('(Nothing())', () => {
      (() => M.fromJust(Nothing())).should.throw('asdf')
    })
  })
  describe('fromMaybe', () => {
    it('(12, Just(42))', () => {
      M.fromMaybe(12, Just(42)).should.be.eql(42)
    })
    it('(12, Nothing())', () => {
      M.fromMaybe(12, Nothing()).should.be.eql(12)
    })
  })
  describe('listToMaybe', () => {
    it('([42])', () => {
      M.listToMaybe([42]).should.be.eql(Just(42))
    })
    it('([])', () => {
      M.listToMaybe([]).should.be.eql(Nothing())
    })
  })
  describe('maybeToList', () => {
    it('(Just(42))', () => {
      M.maybeToList(Just(42)).should.be.eql([42])
    })
    it('(Nothing())', () => {
      M.maybeToList(Nothing()).should.be.eql([])
    })
  })
  describe('catMaybes', () => {
    it('([Just(42), Nothing])', () => {
      M.catMaybes([Just(42), Nothing()]).should.be.eql([42])
    })
  })
  describe('mapMaybe', () => {
    it('(maybeEven, [1,2,3])', () => {
      const maybeEven = (x) => x % 2 === 0 ? Just(x) : Nothing()
      M.mapMaybe(maybeEven, [1,2,3]).should.be.eql([2])
    })
  })
})

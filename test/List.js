import * as L from '../src/List'
import should from 'should'

const id = a => a

describe('List', () => {
  describe('head', () => {
    it('head([1,2,3])', () => {
      L.head([1, 2, 3]).should.be.eql(1)
    })
    it('head([1,2])', () => {
      L.head([1, 2]).should.be.eql(1)
    })
    it('head([1])', () => {
      L.head([1]).should.be.eql(1)
    })
    it('head([])', () => {
      (() => { L.head([]) }).should.throw('haskind.List.head: empty list')
    })
  })
  describe('last', () => {
    it('([1,2,3])', () => {
      L.last([1, 2, 3]).should.be.eql(3)
    })
    it('([1,2])', () => {
      L.last([1, 2]).should.be.eql(2)
    })
    it('([1])', () => {
      L.last([1]).should.be.eql(1)
    })
    it('([])', () => {
      (() => { L.last([]) }).should.throw('haskind.List.last: empty list')
    })
  })
  describe('tail', () => {
    it('([1,2,3])', () => {
      L.tail([1,2,3]).should.be.eql([2,3])
    })
    it('([1,2])', () => {
      L.tail([1,2]).should.be.eql([2])
    })
    it('([1])', () => {
      L.tail([1]).should.be.eql([])
    })
    it('([])', () => {
      L.tail([]).should.be.eql([])
    })
  })
  describe('init', () => {
    it('([1,2,3])', () => {
      L.init([1, 2, 3]).should.be.eql([1,2])
    })
    it('([1,2])', () => {
      L.init([1, 2]).should.be.eql([1])
    })
    it('([1])', () => {
      L.init([1]).should.be.eql([])
    })
    it('([])', () => {
      (() => { L.init([]) }).should.throw('haskind.List.init: empty list')
    })
  })

  describe('length', () => {
    it('works', () => {
      should(L.length([])).be.eql(0)
      should(L.length({})).be.eql(0)

      L.length([1]).should.be.eql(1)
      L.length([1, 2, 3]).should.be.eql(3)
      L.length({ '1': 1 }).should.be.eql(1)
    })
  })
  describe('map', () => {
    it('(id, [1,2,3])', () => {
      L.map(id, [1,2,3]).should.eql([1,2,3])
    })
    it('(succ, [1,2,3])', () => {
      const fn = x => x + 1
      L.map(fn, [1,2,3]).should.eql([2,3,4])
    })
  })
  describe('filter', () => {
    it('(id, [1,2,3])', () => {
      L.filter(id, [1,2,3]).should.eql([1,2,3])
    })
    it('(isEven, [1,2,3])', () => {
      const fn = x => x % 2 === 0
      L.filter(fn, [1,2,3]).should.eql([2])
    })
  })
  describe('foldl', () => {
    it('(id, 0, [1,2,3])', () => {
      L.foldl(id, 0, [1,2,3]).should.eql(0)
    })
    it('(add, 0, [1,2,3])', () => {
      const fn = (acc, x) => acc + x
      L.foldl(fn, 0, [1,2,3]).should.eql(6)
    })
  })
})

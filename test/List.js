import should from 'should'
import * as L from '../src/List'
import { id } from '../src/util'


describe('List', () => {
  describe('Basic Functions', () => {
    describe('head', () => {
      it('([])', () => {
        (() => { L.head([]) }).should.throw('haskind.List.head: empty list')
      })
      it('([1])', () => {
        L.head([1]).should.be.eql(1)
      })
      it('([1,2])', () => {
        L.head([1, 2]).should.be.eql(1)
      })
      it('([1,2,3])', () => {
        L.head([1, 2, 3]).should.be.eql(1)
      })
    })
    describe('last', () => {
      it('([])', () => {
        (() => { L.last([]) }).should.throw('haskind.List.last: empty list')
      })
      it('([1])', () => {
        L.last([1]).should.be.eql(1)
      })
      it('([1,2])', () => {
        L.last([1, 2]).should.be.eql(2)
      })
      it('([1,2,3])', () => {
        L.last([1, 2, 3]).should.be.eql(3)
      })
    })
    describe('tail', () => {
      it('([])', () => {
        L.tail([]).should.be.eql([])
      })
      it('([1])', () => {
        L.tail([1]).should.be.eql([])
      })
      it('([1,2])', () => {
        L.tail([1,2]).should.be.eql([2])
      })
      it('([1,2,3])', () => {
        L.tail([1,2,3]).should.be.eql([2,3])
      })
    })
    describe('init', () => {
      it('([])', () => {
        (() => { L.init([]) }).should.throw('haskind.List.init: empty list')
      })
      it('([1])', () => {
        L.init([1]).should.be.eql([])
      })
      it('([1,2])', () => {
        L.init([1, 2]).should.be.eql([1])
      })
      it('([1,2,3])', () => {
        L.init([1, 2, 3]).should.be.eql([1,2])
      })
    })
    describe('length', () => {
      it('([])', () => {
        should(L.length([])).be.eql(0)
      })
      it('({})', () => {
        should(L.length({})).be.eql(0)
      })
      it('([1])', () => {
        should(L.length([1])).be.eql(1)
      })
      it('([1,2])', () => {
        should(L.length([1,2])).be.eql(2)
      })
      it('([1,2,3])', () => {
        should(L.length([1,2,3])).be.eql(3)
      })
      it('({ "1" : 1 })', () => {
        should(L.length([1])).be.eql(1)
      })
      it('({ "1" : 1, "2": 3 })', () => {
        should(L.length({ '1': 1, '2': 3 })).be.eql(2)
      })
    })
  })
  describe('List transformations', () => {
    describe('map', () => {
      it('(id, [1,2,3])', () => {
        L.map(id, [1,2,3]).should.eql([1,2,3])
      })
      it('(succ, [1,2,3])', () => {
        const fn = x => x + 1
        L.map(fn, [1,2,3]).should.eql([2,3,4])
      })
      it('(succ)([1,2,3])', () => {
        const fn = x => x + 1
        L.map(fn)([1,2,3]).should.eql([2,3,4])
      })
    })
    describe('reverse', () => {
      it('([])', () => {
        L.reverse([]).should.be.eql([])
      })
      it('([1])', () => {
        L.reverse([1]).should.be.eql([1])
      })
      it('([1,2])', () => {
        L.reverse([1,2]).should.be.eql([2,1])
      })
      it('([1,2,3])', () => {
        L.reverse([1,2,3]).should.be.eql([3,2,1])
      })
      describe('("123")', () => {
        it('=== "321"', () => {
          L.reverse('123').should.be.eql('321')
        })
      })
      describe('("reverse")', () => {
        it('=== "esrever"', () => {
          L.reverse('reverse').should.be.eql('esrever')
        })
      })
    })
    describe('intersperse', () => {
      it('(",", "000")', () => {
        L.intersperse(',', '000').should.be.eql('0,0,0')
      })
      it('(",")("000")', () => {
        L.intersperse(',')('000').should.be.eql('0,0,0')
      })
      it('(",", ["0", "0", "0"])', () => {
        L.intersperse(',', ['0', '0', '0']).should.be.eql(['0', ',', '0', ',', '0'])
      })
      it('(",")(["0", "0", "0"])', () => {
        L.intersperse(',')(['0', '0', '0']).should.be.eql(['0', ',', '0', ',', '0'])
      })
    })
  })
  describe('Reducing lists (folds)', () => {
    describe('foldl', () => {
      it('(id, 0, [1,2,3])', () => {
        L.foldl(id, 0, [1,2,3]).should.eql(0)
      })
      it('(add, 0, [1,2,3])', () => {
        const fn = (acc, x) => acc + x
        L.foldl(fn, 0, [1,2,3]).should.eql(6)
      })
      it('(add, 0)([1,2,3])', () => {
        const fn = (acc, x) => acc + x
        L.foldl(fn, 0)([1,2,3]).should.eql(6)
      })
      it('(add)(0, [1,2,3])', () => {
        const fn = (acc, x) => acc + x
        L.foldl(fn)(0, [1,2,3]).should.eql(6)
      })
      it('(add)(0)([1,2,3])', () => {
        const fn = (acc, x) => acc + x
        L.foldl(fn)(0)([1,2,3]).should.eql(6)
      })
    })
  })
  describe('Special folds', () => {
    describe('concat', () => {
      it('([[1], [2,3], [], [[1], []]])', () => {
        L.concat([[1], [2,3], [], [[1], []]]).should.be.eql([1,2,3,[1],[]])
      })
    })
    describe('and', () => {
      it('([])', () => {
        L.and([]).should.be.eql(true)
      })
      it('([true])', () => {
        L.and([true]).should.be.eql(true)
      })
      it('([true, true])', () => {
        L.and([true, true]).should.be.eql(true)
      })
      it('([false, true])', () => {
        L.and([false, true]).should.be.eql(false)
      })
      it('([true, false])', () => {
        L.and([true, false]).should.be.eql(false)
      })
      it('([false, false])', () => {
        L.and([false, false]).should.be.eql(false)
      })
    })
    describe('or', () => {
      it('([])', () => {
        L.or([]).should.be.eql(false)
      })
      it('([true])', () => {
        L.or([true]).should.be.eql(true)
      })
      it('([true, true])', () => {
        L.or([true, true]).should.be.eql(true)
      })
      it('([false, true])', () => {
        L.or([false, true]).should.be.eql(true)
      })
      it('([true, false])', () => {
        L.or([true, false]).should.be.eql(true)
      })
      it('([false, false])', () => {
        L.or([false, false]).should.be.eql(false)
      })
    })
    describe('any', () => {
      it('(id, [])', () => {
        L.any(id, []).should.be.eql(false)
      })
      it('(id, [true])', () => {
        L.any(id, [true]).should.be.eql(true)
      })
      it('(id, [true, true])', () => {
        L.any(id, [true, true]).should.be.eql(true)
      })
      it('(id, [false, true])', () => {
        L.any(id, [false, true]).should.be.eql(true)
      })
      it('(id, [true, false])', () => {
        L.any(id, [true, false]).should.be.eql(true)
      })
      it('(id, [false, false])', () => {
        L.any(id, [false, false]).should.be.eql(false)
      })
      it('(id)([true])', () => {
        L.any(id)([true]).should.be.eql(true)
      })
    })
    describe('all', () => {
      it('(id, [])', () => {
        L.all(id, []).should.be.eql(true)
      })
      it('(id, [true])', () => {
        L.all(id, [true]).should.be.eql(true)
      })
      it('(id, [true, true])', () => {
        L.all(id, [true, true]).should.be.eql(true)
      })
      it('(id, [false, true])', () => {
        L.all(id, [false, true]).should.be.eql(false)
      })
      it('(id, [true, false])', () => {
        L.all(id, [true, false]).should.be.eql(false)
      })
      it('(id, [false, false])', () => {
        L.all(id, [false, false]).should.be.eql(false)
      })
      it('(id)([true])', () => {
        L.all(id)([true]).should.be.eql(true)
      })
    })
    describe('sum', () => {
      it('([1,1,1])', () => {
        L.sum([1,1,1]).should.be.eql(3)
      })
      it('([1,2,3])', () => {
        L.sum([1,2,3]).should.be.eql(6)
      })
      it('([1,2,3,4])', () => {
        L.sum([1,2,3,4]).should.be.eql(10)
      })
    })
    describe('product', () => {
      it('([1,1,1])', () => {
        L.product([1,1,1]).should.be.eql(1)
      })
      it('([1,2,3])', () => {
        L.product([1,2,3]).should.be.eql(6)
      })
      it('([1,2,3,4])', () => {
        L.product([1,2,3,4]).should.be.eql(24)
      })
    })
    describe('maximum', () => {
      it('([1,1,1])', () => {
        L.maximum([1,1,1]).should.be.eql(1)
      })
      it('([1,2,3])', () => {
        L.maximum([1,2,3]).should.be.eql(3)
      })
      it('([1,2,3,4])', () => {
        L.maximum([1,2,3,4]).should.be.eql(4)
      })
      it('([1,8,3,4])', () => {
        L.maximum([1,8,3,4]).should.be.eql(8)
      })
    })
    describe('minimum', () => {
      it('([1,1,1])', () => {
        L.minimum([1,1,1]).should.be.eql(1)
      })
      it('([1,2,3])', () => {
        L.minimum([1,2,3]).should.be.eql(1)
      })
      it('([1,2,3,4])', () => {
        L.minimum([1,2,3,4]).should.be.eql(1)
      })
      it('([1,8,3,4])', () => {
        L.minimum([1,8,3,4]).should.be.eql(1)
      })
    })
  })
  describe('Building lists', () => {
  })
  describe('Accumulating Maps', () => {
  })
  describe('Unfolding', () => {
  })
  describe('Extracting sublists', () => {
    describe('take', () => {

    })
    describe('drop', () => {

    })
  })
  describe('Predicates', () => {
  })
  describe('Searching by equality', () => {
    describe('elem', () => {
      it('(2, [])', () => {
        L.elem(2, []).should.be.false
      })
      it('(2, [1])', () => {
        L.elem(2, [1]).should.be.false
      })
      it('(2, [1,2])', () => {
        L.elem(2, [1,2]).should.be.true
      })
      it('(2)([1,2])', () => {
        L.elem(2)([1,2]).should.be.true
      })
    })
    describe('notElem', () => {
      it('(2, [])', () => {
        L.notElem(2, []).should.be.true
      })
      it('(2, [1])', () => {
        L.notElem(2, [1]).should.be.true
      })
      it('(2, [1,2])', () => {
        L.notElem(2, [1,2]).should.be.false
      })
      it('(2)([1,2])', () => {
        L.notElem(2)([1,2]).should.be.false
      })
    })
    describe('lookup', () => {
      it('()', () => {

      })
      it('()', () => {

      })
    })
  })
  describe('Searching with a predicate ', () => {
    describe('find', () => {

    })
    describe('filter', () => {
      it('(id, [1,2,3])', () => {
        L.filter(id, [1,2,3]).should.eql([1,2,3])
      })
      it('(isEven, [1,2,3])', () => {
        const fn = x => x % 2 === 0
        L.filter(fn, [1,2,3]).should.eql([2])
      })
      it('(isEven)([1,2,3])', () => {
        const fn = x => x % 2 === 0
        L.filter(fn)([1,2,3]).should.eql([2])
      })
    })
    describe('partition', () => {

    })
  })
  describe('Zipping and unzipping lists', () => {
    describe('zip', () => {

    })
  })
  describe('Functions on strings', () => {
    describe('lines', () => {

    })
    describe('words', () => {

    })
    describe('unlines', () => {

    })
    describe('unwords', () => {

    })
  })
  describe('"Set" operations', () => {
    describe('nub', () => {

    })
    describe('delete\'', () => {

    })
    describe('union', () => {

    })
    describe('intersect', () => {

    })
  })
})

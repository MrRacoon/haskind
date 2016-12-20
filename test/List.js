import should from 'should'
import * as L from '../src/List'
import { id } from '../src/util'


describe('List', () => {
  describe('Basic Functions', () => {
    describe('head', () => {
      describe('([])', () => {
        it('errors: haskind.List.head: empty list', () => {
          (() => { L.head([]) }).should.throw('haskind.List.head: empty list')
        })
      })
      describe('([1])', () => {
        it('== 1', () => {
          L.head([1]).should.be.eql(1)
        })
      })
      describe('([1,2])', () => {
        it('== 1', () => {
          L.head([1, 2]).should.be.eql(1)
        })
      })
      describe('([1,2,3])', () => {
        it('== 1', () => {
          L.head([1, 2, 3]).should.be.eql(1)
        })
      })
    })
    describe('last', () => {
      describe('([])', () => {
        it('errors: haskind.List.last: empty list', () => {
          (() => { L.last([]) }).should.throw('haskind.List.last: empty list')
        })
      })
      describe('([1])', () => {
        it('== 1', () => {
          L.last([1]).should.be.eql(1)
        })
      })
      describe('([1,2])', () => {
        it('== 2', () => {
          L.last([1, 2]).should.be.eql(2)
        })
      })
      describe('([1,2,3])', () => {
        it('== 3', () => {
          L.last([1, 2, 3]).should.be.eql(3)
        })
      })
    })
    describe('tail', () => {
      describe('([])', () => {
        it('== []', () => {
          L.tail([]).should.be.eql([])
        })
      })
      describe('([1])', () => {
        it('== []', () => {
          L.tail([1]).should.be.eql([])
        })
      })
      describe('([1,2])', () => {
        it('== [2]', () => {
          L.tail([1,2]).should.be.eql([2])
        })
      })
      describe('([1,2,3])', () => {
        it('== [2,3]', () => {
          L.tail([1,2,3]).should.be.eql([2,3])
        })
      })
    })
    describe('init', () => {
      describe('([])', () => {
        it('errors: haskind.List.init: empty list', () => {
          (() => { L.init([]) }).should.throw('haskind.List.init: empty list')
        })
      })
      describe('([1])', () => {
        it('== []', () => {
          L.init([1]).should.be.eql([])
        })
      })
      describe('([1,2])', () => {
        it('== [1]', () => {
          L.init([1, 2]).should.be.eql([1])
        })
      })
      describe('([1,2,3])', () => {
        it('== [1,2]', () => {
          L.init([1, 2, 3]).should.be.eql([1,2])
        })
      })
    })
    describe('length', () => {
      describe('([])', () => {
        it('== 0', () => {
          should(L.length([])).be.eql(0)
        })
      })
      describe('({})', () => {
        it('== 0', () => {
          should(L.length({})).be.eql(0)
        })
      })
      describe('([1])', () => {
        it('== 1', () => {
          should(L.length([1])).be.eql(1)
        })
      })
      describe('([1,2])', () => {
        it('== 2', () => {
          should(L.length([1,2])).be.eql(2)
        })
      })
      describe('([1,2,3])', () => {
        it('== 3', () => {
          should(L.length([1,2,3])).be.eql(3)
        })
      })
      describe('({ "1" : 1 })', () => {
        it('== 1', () => {
          should(L.length({ '1': 1 })).be.eql(1)
        })
      })
      describe('({ "1" : 1, "2": 3 })', () => {
        it('== 2', () => {
          should(L.length({ '1': 1, '2': 3 })).be.eql(2)
        })
      })
    })
  })
  describe('List transformations', () => {
    describe('map', () => {
      describe('(id, [1,2,3])', () => {
        it('== [1,2,3]]', () => {
          L.map(id, [1,2,3]).should.eql([1,2,3])
        })
      })
      describe('(succ, [1,2,3])', () => {
        it('== [2,3,4]', () => {
          const fn = x => x + 1
          L.map(fn, [1,2,3]).should.eql([2,3,4])
        })
      })
      describe('(succ)([1,2,3])', () => {
        it('== [2,3,4]', () => {
          const fn = x => x + 1
          L.map(fn)([1,2,3]).should.eql([2,3,4])
        })
      })
    })
    describe('reverse', () => {
      describe('([])', () => {
        it('== []', () => {
          L.reverse([]).should.be.eql([])
        })
      })
      describe('([1])', () => {
        it('== [1]', () => {
          L.reverse([1]).should.be.eql([1])
        })
      })
      describe('([1,2])', () => {
        it('== [2,1]', () => {
          L.reverse([1,2]).should.be.eql([2,1])
        })
      })
      describe('([1,2,3])', () => {
        it('== [3,2,1]', () => {
          L.reverse([1,2,3]).should.be.eql([3,2,1])
        })
      })
      describe('("123")', () => {
        it('== "321"', () => {
          L.reverse('123').should.be.eql('321')
        })
      })
      describe('("reverse")', () => {
        it('== "esrever"', () => {
          L.reverse('reverse').should.be.eql('esrever')
        })
      })
    })
    describe('intersperse', () => {
      describe('(",", "000")', () => {
        it('== "0,0,0"', () => {
          L.intersperse(',', '000').should.be.eql('0,0,0')
        })
      })
      describe('(",")("000")', () => {
        it('== "0,0,0"', () => {
          L.intersperse(',')('000').should.be.eql('0,0,0')
        })
      })
      describe('(",", ["0", "0", "0"])', () => {
        it('== ["0", ",", "0", ",", "0"]', () => {
          L.intersperse(',', ['0', '0', '0']).should.be.eql(['0', ',', '0', ',', '0'])
        })
      })
      describe('(",")(["0", "0", "0"])', () => {
        it('== ["0", ",", "0", ",", "0"]', () => {
          L.intersperse(',')(['0', '0', '0']).should.be.eql(['0', ',', '0', ',', '0'])
        })
      })
    })
  })
  describe('Reducing lists (folds)', () => {
    describe('foldl', () => {
      describe('(id, 0, [1,2,3])', () => {
        it('== 0', () => {
          L.foldl(id, 0, [1,2,3]).should.eql(0)
        })
      })
      describe('(add, 0, [1,2,3])', () => {
        it('== 6', () => {
          const fn = (acc, x) => acc + x
          L.foldl(fn, 0, [1,2,3]).should.eql(6)
        })
      })
      describe('(add, 0)([1,2,3])', () => {
        it('== 6', () => {
          const fn = (acc, x) => acc + x
          L.foldl(fn, 0)([1,2,3]).should.eql(6)
        })
      })
      describe('(add)(0, [1,2,3])', () => {
        it('== 6', () => {
          const fn = (acc, x) => acc + x
          L.foldl(fn)(0, [1,2,3]).should.eql(6)
        })
      })
      describe('(add)(0)([1,2,3])', () => {
        it('== 6', () => {
          const fn = (acc, x) => acc + x
          L.foldl(fn)(0)([1,2,3]).should.eql(6)
        })
      })
    })
  })
  describe('Special folds', () => {
    describe('concat', () => {
      describe('([[1], [2,3], [], [[1], []]])', () => {
        it('== [1,2,3,[1],[]]', () => {
          L.concat([[1], [2,3], [], [[1], []]]).should.be.eql([1,2,3,[1],[]])
        })
      })
    })
    describe('and', () => {
      describe('([])', () => {
        it('== true', () => {
          L.and([]).should.be.eql(true)
        })
      })
      describe('([true])', () => {
        it('== true', () => {
          L.and([true]).should.be.eql(true)
        })
      })
      describe('([true, true])', () => {
        it('== true', () => {
          L.and([true, true]).should.be.eql(true)
        })
      })
      describe('([false, true])', () => {
        it('== false', () => {
          L.and([false, true]).should.be.eql(false)
        })
      })
      describe('([true, false])', () => {
        it('== false', () => {
          L.and([true, false]).should.be.eql(false)
        })
      })
      describe('([false, false])', () => {
        it('== false', () => {
          L.and([false, false]).should.be.eql(false)
        })
      })
    })
    describe('or', () => {
      describe('([])', () => {
        it('== false', () => {
          L.or([]).should.be.eql(false)
        })
      })
      describe('([true])', () => {
        it('== true', () => {
          L.or([true]).should.be.eql(true)
        })
      })
      describe('([true, true])', () => {
        it('== true', () => {
          L.or([true, true]).should.be.eql(true)
        })
      })
      describe('([false, true])', () => {
        it('== true', () => {
          L.or([false, true]).should.be.eql(true)
        })
      })
      describe('([true, false])', () => {
        it('== true', () => {
          L.or([true, false]).should.be.eql(true)
        })
      })
      describe('([false, false])', () => {
        it('== false', () => {
          L.or([false, false]).should.be.eql(false)
        })
      })
    })
    describe('any', () => {
      describe('(id, [])', () => {
        it('== false', () => {
          L.any(id, []).should.be.eql(false)
        })
      })
      describe('(id, [true])', () => {
        it('== true', () => {
          L.any(id, [true]).should.be.eql(true)
        })
      })
      describe('(id, [true, true])', () => {
        it('== true', () => {
          L.any(id, [true, true]).should.be.eql(true)
        })
      })
      describe('(id, [false, true])', () => {
        it('== true', () => {
          L.any(id, [false, true]).should.be.eql(true)
        })
      })
      describe('(id, [true, false])', () => {
        it('== true', () => {
          L.any(id, [true, false]).should.be.eql(true)
        })
      })
      describe('(id, [false, false])', () => {
        it('== false', () => {
          L.any(id, [false, false]).should.be.eql(false)
        })
      })
      describe('(id)([true])', () => {
        it('true', () => {
          L.any(id)([true]).should.be.eql(true)
        })
      })
    })
    describe('all', () => {
      describe('(id, [])', () => {
        it('== true', () => {
          L.all(id, []).should.be.eql(true)
        })
      })
      describe('(id, [true])', () => {
        it('== true', () => {
          L.all(id, [true]).should.be.eql(true)
        })
      })
      describe('(id, [true, true])', () => {
        it('== true', () => {
          L.all(id, [true, true]).should.be.eql(true)
        })
      })
      describe('(id, [false, true])', () => {
        it('== false', () => {
          L.all(id, [false, true]).should.be.eql(false)
        })
      })
      describe('(id, [true, false])', () => {
        it('== false', () => {
          L.all(id, [true, false]).should.be.eql(false)
        })
      })
      describe('(id, [false, false])', () => {
        it('== false', () => {
          L.all(id, [false, false]).should.be.eql(false)
        })
      })
      describe('(id)([true])', () => {
        it('== true', () => {
          L.all(id)([true]).should.be.eql(true)
        })
      })
    })
    describe('sum', () => {
      describe('([1,1,1])', () => {
        it('== 3', () => {
          L.sum([1,1,1]).should.be.eql(3)
        })
      })
      describe('([1,2,3])', () => {
        it('== 6', () => {
          L.sum([1,2,3]).should.be.eql(6)
        })
      })
      describe('([1,2,3,4])', () => {
        it('== 10', () => {
          L.sum([1,2,3,4]).should.be.eql(10)
        })
      })
    })
    describe('product', () => {
      describe('([1,1,1])', () => {
        it('== 1', () => {
          L.product([1,1,1]).should.be.eql(1)
        })
      })
      describe('([1,2,3])', () => {
        it('== 6', () => {
          L.product([1,2,3]).should.be.eql(6)
        })
      })
      describe('([1,2,3,4])', () => {
        it('== 24', () => {
          L.product([1,2,3,4]).should.be.eql(24)
        })
      })
    })
    describe('maximum', () => {
      describe('([1,1,1])', () => {
        it('== 1', () => {
          L.maximum([1,1,1]).should.be.eql(1)
        })
      })
      describe('([1,2,3])', () => {
        it('== 3', () => {
          L.maximum([1,2,3]).should.be.eql(3)
        })
      })
      describe('([1,2,3,4])', () => {
        it('== 4', () => {
          L.maximum([1,2,3,4]).should.be.eql(4)
        })
      })
      describe('([1,8,3,4])', () => {
        it('== 8', () => {
          L.maximum([1,8,3,4]).should.be.eql(8)
        })
      })
    })
    describe('minimum', () => {
      describe('([1,1,1])', () => {
        it('== 1', () => {
          L.minimum([1,1,1]).should.be.eql(1)
        })
      })
      describe('([1,2,3])', () => {
        it('== 1', () => {
          L.minimum([1,2,3]).should.be.eql(1)
        })
      })
      describe('([1,2,3,4])', () => {
        it('== 1', () => {
          L.minimum([1,2,3,4]).should.be.eql(1)
        })
      })
      describe('([1,8,3,4])', () => {
        it('== 1', () => {
          L.minimum([1,8,3,4]).should.be.eql(1)
        })
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
      describe('(2, [])', () => {
        it('== false', () => {
          L.elem(2, []).should.be.false
        })
      })
      describe('(2, [1])', () => {
        it('== false', () => {
          L.elem(2, [1]).should.be.false
        })
      })
      describe('(2, [1,2])', () => {
        it('== true', () => {
          L.elem(2, [1,2]).should.be.true
        })
      })
      describe('(2)([1,2])', () => {
        it('== true', () => {
          L.elem(2)([1,2]).should.be.true
        })
      })
    })
    describe('notElem', () => {
      describe('(2, [])', () => {
        it('== true', () => {
          L.notElem(2, []).should.be.true
        })
      })
      describe('(2, [1])', () => {
        it('== true', () => {
          L.notElem(2, [1]).should.be.true
        })
      })
      describe('(2, [1,2])', () => {
        it('== false', () => {
          L.notElem(2, [1,2]).should.be.false
        })
      })
      describe('(2)([1,2])', () => {
        it('== false', () => {
          L.notElem(2)([1,2]).should.be.false
        })
      })
    })
    describe('lookup', () => {
      describe('()', () => {

      })
      describe('()', () => {

      })
    })
  })
  describe('Searching with a predicate ', () => {
    describe('find', () => {

    })
    describe('filter', () => {
      describe('(id, [1,2,3])', () => {
        it('== [1,2,3]', () => {
          L.filter(id, [1,2,3]).should.eql([1,2,3])
        })
      })
      describe('(isEven, [1,2,3])', () => {
        it('== [2]', () => {
          const fn = x => x % 2 === 0
          L.filter(fn, [1,2,3]).should.eql([2])
        })
      })
      describe('(isEven)([1,2,3])', () => {
        it('== [2]', () => {
          const fn = x => x % 2 === 0
          L.filter(fn)([1,2,3]).should.eql([2])
        })
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

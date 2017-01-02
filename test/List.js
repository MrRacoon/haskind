import should from 'should';
import * as L from '../src/List';
import { fibs } from './helpers';
import { id } from '../src/util';
import { Ordering } from '../src/Ord';

const isEven = x => x % 2 === 0;
const eq = (x,y) => x === y;
const compare = (x,y) => x === y
  ? Ordering.EQ
  : x < y
  ? Ordering.LT
  : Ordering.GT;

describe('List', () => {
  describe('Basic Functions', () => {
    describe('head', () => {
      describe('([])', () => {
        it('errors: haskind.List.head: empty list', () => {
          (() => { L.head([]); }).should.throw('haskind.List.head: empty list');
        });
      });
      describe('([1])', () => {
        it('== 1', () => {
          L.head([1]).should.be.eql(1);
        });
      });
      describe('([1,2])', () => {
        it('== 1', () => {
          L.head([1, 2]).should.be.eql(1);
        });
      });
      describe('([1,2,3])', () => {
        it('== 1', () => {
          L.head([1, 2, 3]).should.be.eql(1);
        });
      });
    });
    describe('last', () => {
      describe('([])', () => {
        it('errors: haskind.List.last: empty list', () => {
          (() => { L.last([]); }).should.throw('haskind.List.last: empty list');
        });
      });
      describe('([1])', () => {
        it('== 1', () => {
          L.last([1]).should.be.eql(1);
        });
      });
      describe('([1,2])', () => {
        it('== 2', () => {
          L.last([1, 2]).should.be.eql(2);
        });
      });
      describe('([1,2,3])', () => {
        it('== 3', () => {
          L.last([1, 2, 3]).should.be.eql(3);
        });
      });
    });
    describe('tail', () => {
      describe('([])', () => {
        it('== []', () => {
          L.tail([]).should.be.eql([]);
        });
      });
      describe('([1])', () => {
        it('== []', () => {
          L.tail([1]).should.be.eql([]);
        });
      });
      describe('([1,2])', () => {
        it('== [2]', () => {
          L.tail([1,2]).should.be.eql([2]);
        });
      });
      describe('([1,2,3])', () => {
        it('== [2,3]', () => {
          L.tail([1,2,3]).should.be.eql([2,3]);
        });
      });
    });
    describe('init', () => {
      describe('([])', () => {
        it('errors: haskind.List.init: empty list', () => {
          (() => { L.init([]); }).should.throw('haskind.List.init: empty list');
        });
      });
      describe('([1])', () => {
        it('== []', () => {
          L.init([1]).should.be.eql([]);
        });
      });
      describe('([1,2])', () => {
        it('== [1]', () => {
          L.init([1, 2]).should.be.eql([1]);
        });
      });
      describe('([1,2,3])', () => {
        it('== [1,2]', () => {
          L.init([1, 2, 3]).should.be.eql([1,2]);
        });
      });
    });
    describe('length', () => {
      describe('([])', () => {
        it('== 0', () => {
          should(L.length([])).be.eql(0);
        });
      });
      describe('({})', () => {
        it('== 0', () => {
          should(L.length({})).be.eql(0);
        });
      });
      describe('([1])', () => {
        it('== 1', () => {
          should(L.length([1])).be.eql(1);
        });
      });
      describe('([1,2])', () => {
        it('== 2', () => {
          should(L.length([1,2])).be.eql(2);
        });
      });
      describe('([1,2,3])', () => {
        it('== 3', () => {
          should(L.length([1,2,3])).be.eql(3);
        });
      });
      describe('({ "1" : 1 })', () => {
        it('== 1', () => {
          should(L.length({ '1': 1 })).be.eql(1);
        });
      });
      describe('({ "1" : 1, "2": 3 })', () => {
        it('== 2', () => {
          should(L.length({ '1': 1, '2': 3 })).be.eql(2);
        });
      });
    });
  });
  describe('List transformations', () => {
    describe('map', () => {
      describe('(id, [1,2,3])', () => {
        it('== [1,2,3]]', () => {
          L.map(id, [1,2,3]).should.eql([1,2,3]);
        });
      });
      describe('(succ, [1,2,3])', () => {
        it('== [2,3,4]', () => {
          const fn = x => x + 1;
          L.map(fn, [1,2,3]).should.eql([2,3,4]);
        });
      });
      describe('(succ)([1,2,3])', () => {
        it('== [2,3,4]', () => {
          const fn = x => x + 1;
          L.map(fn)([1,2,3]).should.eql([2,3,4]);
        });
      });
    });
    describe('reverse', () => {
      describe('([])', () => {
        it('== []', () => {
          L.reverse([]).should.be.eql([]);
        });
      });
      describe('([1])', () => {
        it('== [1]', () => {
          L.reverse([1]).should.be.eql([1]);
        });
      });
      describe('([1,2])', () => {
        it('== [2,1]', () => {
          L.reverse([1,2]).should.be.eql([2,1]);
        });
      });
      describe('([1,2,3])', () => {
        it('== [3,2,1]', () => {
          L.reverse([1,2,3]).should.be.eql([3,2,1]);
        });
      });
      describe('("123")', () => {
        it('== "321"', () => {
          L.reverse('123').should.be.eql('321');
        });
      });
      describe('("reverse")', () => {
        it('== "esrever"', () => {
          L.reverse('reverse').should.be.eql('esrever');
        });
      });
    });
    describe('intersperse', () => {
      describe('(",", "000")', () => {
        it('== "0,0,0"', () => {
          L.intersperse(',', '000').should.be.eql('0,0,0');
        });
      });
      describe('(",")("000")', () => {
        it('== "0,0,0"', () => {
          L.intersperse(',')('000').should.be.eql('0,0,0');
        });
      });
      describe('(",", ["0", "0", "0"])', () => {
        it('== ["0", ",", "0", ",", "0"]', () => {
          L.intersperse(',', ['0', '0', '0']).should.be.eql(['0', ',', '0', ',', '0']);
        });
      });
      describe('(",")(["0", "0", "0"])', () => {
        it('== ["0", ",", "0", ",", "0"]', () => {
          L.intersperse(',')(['0', '0', '0']).should.be.eql(['0', ',', '0', ',', '0']);
        });
      });
    });
  });
  describe('Reducing lists (folds)', () => {
    describe('foldl', () => {
      describe('(id, 0, [1,2,3])', () => {
        it('== 0', () => {
          L.foldl(id, 0, [1,2,3]).should.eql(0);
        });
      });
      describe('(add, 0, [1,2,3])', () => {
        it('== 6', () => {
          const fn = (acc, x) => acc + x;
          L.foldl(fn, 0, [1,2,3]).should.eql(6);
        });
      });
      describe('(add, 0)([1,2,3])', () => {
        it('== 6', () => {
          const fn = (acc, x) => acc + x;
          L.foldl(fn, 0)([1,2,3]).should.eql(6);
        });
      });
      describe('(add)(0, [1,2,3])', () => {
        it('== 6', () => {
          const fn = (acc, x) => acc + x;
          L.foldl(fn)(0, [1,2,3]).should.eql(6);
        });
      });
      describe('(add)(0)([1,2,3])', () => {
        it('== 6', () => {
          const fn = (acc, x) => acc + x;
          L.foldl(fn)(0)([1,2,3]).should.eql(6);
        });
      });
    });
  });
  describe('Special folds', () => {
    describe('concat', () => {
      describe('([[1], [2,3], [], [[1], []]])', () => {
        it('== [1,2,3,[1],[]]', () => {
          L.concat([[1], [2,3], [], [[1], []]]).should.be.eql([1,2,3,[1],[]]);
        });
      });
    });
    describe('and', () => {
      describe('([])', () => {
        it('== true', () => {
          L.and([]).should.be.eql(true);
        });
      });
      describe('([true])', () => {
        it('== true', () => {
          L.and([true]).should.be.eql(true);
        });
      });
      describe('([true, true])', () => {
        it('== true', () => {
          L.and([true, true]).should.be.eql(true);
        });
      });
      describe('([false, true])', () => {
        it('== false', () => {
          L.and([false, true]).should.be.eql(false);
        });
      });
      describe('([true, false])', () => {
        it('== false', () => {
          L.and([true, false]).should.be.eql(false);
        });
      });
      describe('([false, false])', () => {
        it('== false', () => {
          L.and([false, false]).should.be.eql(false);
        });
      });
    });
    describe('or', () => {
      describe('([])', () => {
        it('== false', () => {
          L.or([]).should.be.eql(false);
        });
      });
      describe('([true])', () => {
        it('== true', () => {
          L.or([true]).should.be.eql(true);
        });
      });
      describe('([true, true])', () => {
        it('== true', () => {
          L.or([true, true]).should.be.eql(true);
        });
      });
      describe('([false, true])', () => {
        it('== true', () => {
          L.or([false, true]).should.be.eql(true);
        });
      });
      describe('([true, false])', () => {
        it('== true', () => {
          L.or([true, false]).should.be.eql(true);
        });
      });
      describe('([false, false])', () => {
        it('== false', () => {
          L.or([false, false]).should.be.eql(false);
        });
      });
    });
    describe('any', () => {
      describe('(id, [])', () => {
        it('== false', () => {
          L.any(id, []).should.be.eql(false);
        });
      });
      describe('(id, [true])', () => {
        it('== true', () => {
          L.any(id, [true]).should.be.eql(true);
        });
      });
      describe('(id, [true, true])', () => {
        it('== true', () => {
          L.any(id, [true, true]).should.be.eql(true);
        });
      });
      describe('(id, [false, true])', () => {
        it('== true', () => {
          L.any(id, [false, true]).should.be.eql(true);
        });
      });
      describe('(id, [true, false])', () => {
        it('== true', () => {
          L.any(id, [true, false]).should.be.eql(true);
        });
      });
      describe('(id, [false, false])', () => {
        it('== false', () => {
          L.any(id, [false, false]).should.be.eql(false);
        });
      });
      describe('(id)([true])', () => {
        it('== true', () => {
          L.any(id)([true]).should.be.eql(true);
        });
      });
    });
    describe('all', () => {
      describe('(id, [])', () => {
        it('== true', () => {
          L.all(id, []).should.be.eql(true);
        });
      });
      describe('(id, [true])', () => {
        it('== true', () => {
          L.all(id, [true]).should.be.eql(true);
        });
      });
      describe('(id, [true, true])', () => {
        it('== true', () => {
          L.all(id, [true, true]).should.be.eql(true);
        });
      });
      describe('(id, [false, true])', () => {
        it('== false', () => {
          L.all(id, [false, true]).should.be.eql(false);
        });
      });
      describe('(id, [true, false])', () => {
        it('== false', () => {
          L.all(id, [true, false]).should.be.eql(false);
        });
      });
      describe('(id, [false, false])', () => {
        it('== false', () => {
          L.all(id, [false, false]).should.be.eql(false);
        });
      });
      describe('(id)([true])', () => {
        it('== true', () => {
          L.all(id)([true]).should.be.eql(true);
        });
      });
    });
    describe('sum', () => {
      describe('([1,1,1])', () => {
        it('== 3', () => {
          L.sum([1,1,1]).should.be.eql(3);
        });
      });
      describe('([1,2,3])', () => {
        it('== 6', () => {
          L.sum([1,2,3]).should.be.eql(6);
        });
      });
      describe('([1,2,3,4])', () => {
        it('== 10', () => {
          L.sum([1,2,3,4]).should.be.eql(10);
        });
      });
    });
    describe('product', () => {
      describe('([1,1,1])', () => {
        it('== 1', () => {
          L.product([1,1,1]).should.be.eql(1);
        });
      });
      describe('([1,2,3])', () => {
        it('== 6', () => {
          L.product([1,2,3]).should.be.eql(6);
        });
      });
      describe('([1,2,3,4])', () => {
        it('== 24', () => {
          L.product([1,2,3,4]).should.be.eql(24);
        });
      });
    });
    describe('maximum', () => {
      describe('([1,1,1])', () => {
        it('== 1', () => {
          L.maximum([1,1,1]).should.be.eql(1);
        });
      });
      describe('([1,2,3])', () => {
        it('== 3', () => {
          L.maximum([1,2,3]).should.be.eql(3);
        });
      });
      describe('([1,2,3,4])', () => {
        it('== 4', () => {
          L.maximum([1,2,3,4]).should.be.eql(4);
        });
      });
      describe('([1,8,3,4])', () => {
        it('== 8', () => {
          L.maximum([1,8,3,4]).should.be.eql(8);
        });
      });
    });
    describe('minimum', () => {
      describe('([1,1,1])', () => {
        it('== 1', () => {
          L.minimum([1,1,1]).should.be.eql(1);
        });
      });
      describe('([1,2,3])', () => {
        it('== 1', () => {
          L.minimum([1,2,3]).should.be.eql(1);
        });
      });
      describe('([1,2,3,4])', () => {
        it('== 1', () => {
          L.minimum([1,2,3,4]).should.be.eql(1);
        });
      });
      describe('([1,8,3,4])', () => {
        it('== 1', () => {
          L.minimum([1,8,3,4]).should.be.eql(1);
        });
      });
    });
  });
  describe('Building lists', () => {
  });
  describe('Accumulating Maps', () => {
  });
  describe('Unfolding', () => {
  });
  describe('Extracting sublists', () => {
    describe('take', () => {
      describe('(2, [1,2,3,4])', () => {
        it('== [1,2]', () => {
          L.take(2, [1,2,3,4]).should.be.eql([1,2]);
        });
      });
      describe('(2)([1,2,3,4])', () => {
        it('== [1,2]', () => {
          L.take(2)([1,2,3,4]).should.be.eql([1,2]);
        });
      });
      describe('(1, [1,2,3,4])', () => {
        it('== [1]', () => {
          L.take(1, [1,2,3,4]).should.be.eql([1]);
        });
      });
      describe('(0, [1,2,3,4])', () => {
        it('== []', () => {
          L.take(0, [1,2,3,4]).should.be.eql([]);
        });
      });
      describe('(-1, [1,2,3,4])', () => {
        it('== []', () => {
          L.take(-1, [1,2,3,4]).should.be.eql([]);
        });
      });
      describe('(-1, [1,2,3,4])', () => {
        it('== []', () => {
          L.take(-1, [1,2,3,4]).should.be.eql([]);
        });
      });
      xdescribe('(5, fibs())', () => {
        it('== [1,1,2,3,5]', () => {
          L.take(1, fibs()).should.be.eql([1,1,2,3,5]);
        });
      });
    });
    describe('drop', () => {
      describe('(2, [1,2,3,4])', () => {
        it('== [3,4]', () => {
          L.drop(2, [1,2,3,4]).should.be.eql([3,4]);
        });
      });
      describe('(2)([1,2,3,4])', () => {
        it('== [3,4]', () => {
          L.drop(2)([1,2,3,4]).should.be.eql([3,4]);
        });
      });
      describe('(1, [1,2,3,4])', () => {
        it('== [2,3,4]', () => {
          L.drop(1, [1,2,3,4]).should.be.eql([2,3,4]);
        });
      });
      describe('(0, [1,2,3,4])', () => {
        it('== [1,2,3,4]', () => {
          L.drop(0, [1,2,3,4]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(-1, [1,2,3,4])', () => {
        it('== [1,2,3,4]', () => {
          L.drop(-1, [1,2,3,4]).should.be.eql([1,2,3,4]);
        });
      });
    });
    describe('splitAt', () => {

    });
    describe('takeWhile', () => {

    });
    describe('dropWhile', () => {

    });
    // dropWhileEnd :: (a -> Bool) -> [a] -> [a]
    // span :: (a -> Bool) -> [a] -> ([a], [a])
    // break :: (a -> Bool) -> [a] -> ([a], [a])
    // stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
    // group :: Eq a => [a] -> [[a]]
    // inits :: [a] -> [[a]]
    // tails :: [a] -> [[a]]
  });
  xdescribe('Predicates', () => {
    describe('isPrefixOf', () => {
      describe('([], [1,2,3])', () => {
        it('== true', () => {
          L.isPrefixOf([], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1], [1,2,3])', () => {
        it('== true', () => {
          L.isPrefixOf([1], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,2], [1,2,3])', () => {
        it('== true', () => {
          L.isPrefixOf([1,2], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,2,3], [1,2,3])', () => {
        it('== true', () => {
          L.isPrefixOf([1,2,3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,2,3,2], [1,2,3])', () => {
        it('== false', () => {
          L.isPrefixOf([1,2,3,2], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([2], [1,2,3])', () => {
        it('== false', () => {
          L.isPrefixOf([2], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([1,2,3])([1,2,3])', () => {
        it('== true', () => {
          L.isPrefixOf([1,2,3])([1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,1,2,3,5], fibs())', () => {
        it('== false', () => {
          L.isPrefixOf([1,1,2,3,5], fibs()).should.be.eql(true);
        });
      });
    });
    describe('isSuffixOf', () => {
      describe('([], [1,2,3])', () => {
        it('== true', () => {
          L.isSuffixOf([], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([3], [1,2,3])', () => {
        it('== true', () => {
          L.isSuffixOf([3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([2,3], [1,2,3])', () => {
        it('== true', () => {
          L.isSuffixOf([2,3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,2,3], [1,2,3])', () => {
        it('== true', () => {
          L.isSuffixOf([1,2,3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([2], [1,2,3])', () => {
        it('== false', () => {
          L.isSuffixOf([2], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([1,2,3])([1,2,3])', () => {
        it('== true', () => {
          L.isSuffixOf([1,2,3])([1,2,3]).should.be.eql(true);
        });
      });
    });
    describe('isInfixOf', () => {
      describe('([], [1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([2], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1], [1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([1], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([2], [1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([2], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([3], [1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,2], [1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([1,2], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([2,3], [1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([2,3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,3], [1,2,3])', () => {
        it('== false', () => {
          L.isInfixOf([1,3], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([4], [1,2,3])', () => {
        it('== false', () => {
          L.isInfixOf([3], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([2,3])([1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([2,3])([1,2,3]).should.be.eql(true);
        });
      });
    });
    describe('isSubsequenceOf', () => {
      describe('([], [1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1], [1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([1], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([3], [1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([4], [1,2,3])', () => {
        it('== false', () => {
          L.isInfixOf([4], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([1,2], [1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([1,2], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,3], [1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([1,3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,4], [1,2,3])', () => {
        it('== false', () => {
          L.isInfixOf([1,4], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([1,3])([1,2,3])', () => {
        it('== true', () => {
          L.isInfixOf([1,3])([1,2,3]).should.be.eql(true);
        });
      });
    });
  });
  describe('Searching by equality', () => {
    describe('elem', () => {
      describe('(2, [])', () => {
        it('== false', () => {
          L.elem(2, []).should.be.false;
        });
      });
      describe('(2, [1])', () => {
        it('== false', () => {
          L.elem(2, [1]).should.be.false;
        });
      });
      describe('(2, [1,2])', () => {
        it('== true', () => {
          L.elem(2, [1,2]).should.be.true;
        });
      });
      describe('(2)([1,2])', () => {
        it('== true', () => {
          L.elem(2)([1,2]).should.be.true;
        });
      });
    });
    describe('notElem', () => {
      describe('(2, [])', () => {
        it('== true', () => {
          L.notElem(2, []).should.be.true;
        });
      });
      describe('(2, [1])', () => {
        it('== true', () => {
          L.notElem(2, [1]).should.be.true;
        });
      });
      describe('(2, [1,2])', () => {
        it('== false', () => {
          L.notElem(2, [1,2]).should.be.false;
        });
      });
      describe('(2)([1,2])', () => {
        it('== false', () => {
          L.notElem(2)([1,2]).should.be.false;
        });
      });
    });
    describe('lookup', () => {
      describe('()', () => {

      });
      describe('()', () => {

      });
    });
  });
  describe('Searching with a predicate ', () => {
    xdescribe('find', () => {

    });
    describe('filter', () => {
      describe('(id, [1,2,3])', () => {
        it('== [1,2,3]', () => {
          L.filter(id, [1,2,3]).should.eql([1,2,3]);
        });
      });
      describe('(isEven, [1,2,3])', () => {
        it('== [2]', () => {
          L.filter(isEven, [1,2,3]).should.eql([2]);
        });
      });
      describe('(isEven)([1,2,3])', () => {
        it('== [2]', () => {
          L.filter(isEven)([1,2,3]).should.eql([2]);
        });
      });
    });
    xdescribe('partition', () => {
      describe('(isEven, [])', () => {
        it('== [[], []]', () => {
          L.partition(isEven, []).should.be.eql([[], []]);
        });
      });
      describe('(isEven, [1,2,3,4])', () => {
        it('== [[2,4], [1,3]]', () => {
          L.partition(isEven, [1,2,3,4]).should.be.eql([[2,4], [1,3]]);
        });
      });
      describe('(isEven)([1,2,3,4])', () => {
        it('== [[2,4], [1,3]]', () => {
          L.partition(isEven)([1,2,3,4]).should.be.eql([[2,4], [1,3]]);
        });
      });
    });
  });
  describe('Indexing lists', () => {
    describe('index', () => {
      describe('([1,2,3], 0)', () => {
        it('== 1', () => {
          L.index([1,2,3], 0).should.be.eql(1);
        });
      });
      describe('([1,2,3], 1)', () => {
        it('== 2', () => {
          L.index([1,2,3], 1).should.be.eql(2);
        });
      });
      describe('([1,2,3], 2)', () => {
        it('== 3', () => {
          L.index([1,2,3], 2).should.be.eql(3);
        });
      });
      describe('([1,2,3])(2)', () => {
        it('== 3', () => {
          L.index([1,2,3])(2).should.be.eql(3);
        });
      });
      describe('([1,2,3], 3)', () => {
        it('errors: haskind.List.index: index too large', () => {
          (() => L.index([1,2,3], 3)).should.throw('haskind.List.index: index too large');
        });
      });
      describe('([1,2,3], 42)', () => {
        it('errors: haskind.List.index: index too large', () => {
          (() => L.index([1,2,3], 42)).should.throw('haskind.List.index: index too large');
        });
      });
      describe('([1,2,3], -1)', () => {
        it('errors: haskind.List.index: negative index', () => {
          (() => L.index([1,2,3], -1)).should.throw('haskind.List.index: negative index');
        });
      });
    });
    describe('elemIndex', () => {
      describe('(4, [1,2,3,4,5])', () => {
        it('== Just(3)', () => {
          L.elemIndex(4, [1,2,3,4,5]).should.be.eql({ just: 3 });
        });
      });
      describe('(4)([1,2,3,4,5])', () => {
        it('== Just(3)', () => {
          L.elemIndex(4)([1,2,3,4,5]).should.be.eql({ just: 3 });
        });
      });
      describe('(2, [1,2,3,4,5])', () => {
        it('== Just(1)', () => {
          L.elemIndex(2)([1,2,3,4,5]).should.be.eql({ just: 1 });
        });
      });
      describe('(7, [1,2,3,4,5])', () => {
        it('== Nothing()', () => {
          L.elemIndex(7)([1,2,3,4,5]).should.be.eql({ nothing: null });
        });
      });
    });
    describe('elemIndices', () => {
      describe('(1, [])', () => {
        it('== []', () => {
          L.elemIndices(1, []).should.be.eql([]);
        });
      });
      describe('(1, [2,3,4])', () => {
        it('== []', () => {
          L.elemIndices(1, [2,3,4]).should.be.eql([]);
        });
      });
      describe('(1, [1,2,3,4,1])', () => {
        it('== [0,4]', () => {
          L.elemIndices(1, [1,2,3,4,1]).should.be.eql([0,4]);
        });
      });
      describe('(1)([1,2,3,4,1])', () => {
        it('== [0,4]', () => {
          L.elemIndices(1)([1,2,3,4,1]).should.be.eql([0,4]);
        });
      });
    });
    describe('findIndex', () => {
      describe('(isEven, [1,2,3,4,5])', () => {
        it('== Just(2)', () => {
          L.findIndex(isEven, [1,2,3,4,5]).should.be.eql({ just: 1 });
        });
      });
      describe('(isEven)([1,2,3,4,5])', () => {
        it('== Just(2)', () => {
          L.findIndex(isEven)([1,2,3,4,5]).should.be.eql({ just: 1 });
        });
      });
      describe('(over9000, [1,2,3,4,5])', () => {
        it('== Nothing()', () => {
          const over9000 = (n) => n > 9000;
          L.findIndex(over9000, [1,2,3,4,5]).should.be.eql({ nothing: null });
        });
      });
    });
    describe('findIndices', () => {
      describe('(isEven, [])', () => {
        it('== []', () => {
          L.findIndices(isEven, []).should.be.eql([]);
        });
      });
      describe('(isEven, [1,2,3,4])', () => {
        it('== [1,3]', () => {
          L.findIndices(isEven, [1,2,3,4]).should.be.eql([1,3]);
        });
      });
      describe('(isEven)([1,2,3,4])', () => {
        it('== [1,3]', () => {
          L.findIndices(isEven)([1,2,3,4]).should.be.eql([1,3]);
        });
      });
      describe('(isEven, [2,2,2,2,2])', () => {
        it('== [0,1,2,3,4]', () => {
          L.findIndices(isEven, [2,2,2,2,2]).should.be.eql([0,1,2,3,4]);
        });
      });
      describe('(isEven, [1,1,1,1,1])', () => {
        it('== []', () => {
          L.findIndices(isEven, [1,1,1,1,1]).should.be.eql([]);
        });
      });
    });
  });
  describe('Zipping and unzipping lists', () => {
    describe('zip', () => {
      describe('([], [])', () => {
        it('== []', () => {
          L.zip([], []).should.be.eql([]);
        });
      });
      describe('([1,2], [1,2,3])', () => {
        it('== [[1,1], [2,2]]', () => {
          L.zip([1,2], [1,2,3]).should.be.eql([[1,1], [2,2]]);
        });
      });
      describe('([1,2])([1,2,3])', () => {
        it('== [[1,1], [2,2]]', () => {
          L.zip([1,2])([1,2,3]).should.be.eql([[1,1], [2,2]]);
        });
      });
    });
    describe('unzip', () => {
      describe('([])', () => {
        it('== []', () => {
          L.unzip([]).should.be.eql([[],[]]);
        });
      });
      describe('([[1,1], [2,2], [4,5]])', () => {
        it('== [[1,2,4], [1,2,5]]', () => {
          L.unzip([[1,1], [2,2], [4,5]]).should.be.eql([[1,2,4], [1,2,5]]);
        });
      });
      describe('([1,2])([1,2,3])', () => {
        it('== [[1,1], [2,2]]', () => {
          L.zip([1,2])([1,2,3]).should.be.eql([[1,1], [2,2]]);
        });
      });
    });
  });
  xdescribe('Functions on strings', () => {
    describe('lines', () => {
      describe('("")', () => {
        it('== []', () => {
          L.lines('').should.be.eql([]);
        });
      });
      describe('("\\n")', () => {
        it('== [""]', () => {
          L.lines('\\n').should.be.eql(['']);
        });
      });
      describe('("one")', () => {
        it('== ["one"]', () => {
          L.lines('one').should.be.eql(['one']);
        });
      });
      describe('("one\\n")', () => {
        it('== ["one"]', () => {
          L.lines('one\\n').should.be.eql(['one']);
        });
      });
      describe('("one\\n\\n")', () => {
        it('== ["one", ""]', () => {
          L.lines('"one\\n\\n"').should.be.eql(['one', '']);
        });
      });
      describe('("one\\ntwo")', () => {
        it('== ["one", "two"]', () => {
          L.lines('one\\ntwo').should.be.eql(['one', 'two']);
        });
      });
      describe('("one\\ntwo\\n")', () => {
        it('== ["one", "two"]', () => {
          L.lines('one\\ntwo\\n').should.be.eql(['one', 'two']);
        });
      });
    });
    describe('words', () => {
      describe('("")', () => {
        it('== []', () => {
          L.words('').should.be.eql([]);
        });
      });
      describe('("one")', () => {
        it('== ["one"]', () => {
          L.words('one').should.be.eql(['one']);
        });
      });
      describe('("one ")', () => {
        it('== ["one"]', () => {
          L.words('one ').should.be.eql(['one']);
        });
      });
      describe('("one two")', () => {
        it('== ["one", "two"]', () => {
          L.words('one two').should.be.eql(['one', 'two']);
        });
      });
      describe('("one two ")', () => {
        it('== ["one", "two"]', () => {
          L.words('one two ').should.be.eql(['one', 'two']);
        });
      });
      describe('(" one two ")', () => {
        it('== ["one", "two"]', () => {
          L.words(' one two ').should.be.eql(['one', 'two']);
        });
      });
    });
    describe('unlines', () => {
      describe('([])', () => {
        it('== ""', () => {
          L.unlines([]).should.be.eql('');
        });
      });
      describe('(["one"])', () => {
        it('== "one\\n"', () => {
          L.unlines(['one']).should.be.eql('one\n');
        });
      });
      describe('(["one", "two"])', () => {
        it('== "one\\ntwo\\n"', () => {
          L.unlines(['one', 'two']).should.be.eql('one\ntwo\n');
        });
      });
    });
    describe('unwords', () => {
      describe('([])', () => {
        it('== ""', () => {
          L.unwords([]).should.be.eql('');
        });
      });
      describe('(["one"])', () => {
        it('== "one"', () => {
          L.unwords(['one']).should.be.eql('one');
        });
      });
      describe('(["one", "two"])', () => {
        it('== "one two"', () => {
          L.unwords(['one', 'two']).should.be.eql('one two');
        });
      });
      describe('(["one ", " two"])', () => {
        it('== "one   two"', () => {
          L.unwords(['one ', ' two']).should.be.eql('one   two');
        });
      });
    });
  });
  xdescribe('"Set" operations', () => {
    describe('nub', () => {
      describe('([])', () => {
        it('== []', () => {
          L.nub([]).should.be.eql([]);
        });
      });
      describe('([1,2,3])', () => {
        it('== [1,2,3]', () => {
          L.nub([1,2,3]).should.be.eql([1,2,3]);
        });
      });
      describe('([1,2,3,4,2,1,4,6])', () => {
        it('== [1,2,3,4,6]', () => {
          L.nub([1,2,3,4,2,1,4,6]).should.be.eql([1,2,3,4,6]);
        });
      });
    });
    describe('delete_', () => {
      describe('(3, [1,2,3,3,4,3])', () => {
        it('== [1,2,3,4,3]', () => {
          L.delete_(3, [1,2,3,3,4,3]).should.be.eql([1,2,3,4,3]);
        });
      });
      describe('("a", "banana")', () => {
        it('== "bnana"', () => {
          L.delete_('a', 'banana').should.be.eql('bnana');
        });
      });
      describe('("a")("banana")', () => {
        it('== "bnana"', () => {
          L.delete_('a')('banana').should.be.eql('bnana');
        });
      });
    });
    describe('difference', () => {
      describe('([1,2,3], [2,3,4])', () => {
        it('== [1]', () => {
          L.difference([1,2,3], [2,3,4]).should.be.eql([1]);
        });
      });
      describe('([1,2,3])([2,3,4])', () => {
        it('== [1]', () => {
          L.difference([1,2,3])([2,3,4]).should.be.eql([1]);
        });
      });
      describe('([1,2,3,4,5], [2,3,4])', () => {
        it('== [1,5]', () => {
          L.difference([1,2,3,4,5], [2,3,4]).should.be.eql([1,5]);
        });
      });
    });
    describe('union', () => {
      describe('([1,2,3,4], [2,4,6,8])', () => {
        it('== [1,2,3,4,6,8]', () => {
          L.union([1,2,3,4], [2,4,6,8]).should.be.eql([1,2,3,4,6,8]);
        });
      });
      describe('([1,2,3,4])([2,4,6,8])', () => {
        it('== [1,2,3,4,6,8]', () => {
          L.union([1,2,3,4])([2,4,6,8]).should.be.eql([1,2,3,4,6,8]);
        });
      });
      describe('([1,2,2,3,4], [6,4,4,2])', () => {
        it('== [1,2,2,3,4,6]', () => {
          L.union([1,2,2,3,4], [6,4,4,2]).should.be.eql([1,2,2,3,4,6]);
        });
      });
    });
    describe('intersect', () => {
      describe('([1,2,3,4], [2,4,6,8])', () => {
        it('== [2,4]', () => {
          L.intersect([1,2,3,4], [2,4,6,8]).should.be.eql([2,4]);
        });
      });
      describe('([1,2,3,4])([2,4,6,8])', () => {
        it('== [2,4]', () => {
          L.intersect([1,2,3,4])([2,4,6,8]).should.be.eql([2,4]);
        });
      });
      describe('([1,2,2,3,4], [6,4,4,2])', () => {
        it('== [2,2,4]', () => {
          L.intersect([1,2,2,3,4], [6,4,4,2]).should.be.eql([2,2,4]);
        });
      });
    });
  });
  xdescribe('Ordered Lists', () => {
    describe('sort', () => {
      describe('([4,2,3,1])', () => {
        it('== [1,2,3,4]', () => {
          L.sort([4,2,3,1]).should.be.eql([1,2,3,4]);
        });
      });
      describe('([4,2,3,1,1,2,4,3])', () => {
        it('== [1,1,2,2,3,3,4,4]', () => {
          L.sort([4,2,3,1,1,2,4,3]).should.be.eql([1,1,2,2,3,3,4,4]);
        });
      });
    });
    describe('sortOn', () => {
      describe('(id, [4,2,3,1])', () => {
        it('== [1,2,3,4]', () => {
          L.sort(id, [4,2,3,1]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(id)([4,2,3,1])', () => {
        it('== [1,2,3,4]', () => {
          L.sort(id)([4,2,3,1]).should.be.eql([1,2,3,4]);
        });
      });
    });
    describe('insert', () => {
      describe('(3, [1,2,4])', () => {
        it('== [1,2,3,4]', () => {
          L.insert(3, [1,2,4]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(3)([1,2,4])', () => {
        it('== [1,2,3,4]', () => {
          L.insert(3)([1,2,4]).should.be.eql([1,2,3,4]);
        });
      });
    });
  });
  xdescribe('The "by" operations', () => {
    describe('nubBy', () => {
      describe('(eq, [])', () => {
        it('== []', () => {
          L.nubBy(eq, []).should.be.eql([]);
        });
      });
      describe('(eq, [1,2,3])', () => {
        it('== [1,2,3]', () => {
          L.nubBy(eq, [1,2,3]).should.be.eql([1,2,3]);
        });
      });
      describe('(eq, [1,1,2,2,3,3])', () => {
        it('== [1,2,3]', () => {
          L.nubBy(eq, [1,1,2,2,3,3]).should.be.eql([1,2,3]);
        });
      });
      describe('(eq)([1,1,2,2,3,3])', () => {
        it('== [1,2,3]', () => {
          L.nubBy(eq)([1,1,2,2,3,3]).should.be.eql([1,2,3]);
        });
      });
    });
    describe('deleteBy', () => {

    });
    describe('deleteFirstBy', () => {

    });
    describe('unionBy', () => {

    });
    describe('intersectBy', () => {

    });
    describe('groupBy', () => {

    });
  });
  xdescribe('User-supplied comparison', () => {
    describe('sortBy', () => {
      describe('(compare, [1,3,2,4])', () => {
        it('== [1,2,3,4]', () => {
          L.sortBy(compare, [1,3,2,4]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(compare)([1,3,2,4])', () => {
        it('== [1,2,3,4]', () => {
          L.sortBy(compare, [1,3,2,4]).should.be.eql([1,2,3,4]);
        });
      });
    });
    describe('insertBy', () => {
      describe('(compare, 3, [1,2,4])', () => {
        it('== [1,2,3,4]', () => {
          L.insertBy(compare, 3, [1,2,4]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(compare)(3, [1,2,4])', () => {
        it('== [1,2,3,4]', () => {
          L.insertBy(compare)(3, [1,2,4]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(compare, 3)([1,2,4])', () => {
        it('== [1,2,3,4]', () => {
          L.insertBy(compare, 3)([1,2,4]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(compare)(3)([1,2,4])', () => {
        it('== [1,2,3,4]', () => {
          L.insertBy(compare)(3)([1,2,4]).should.be.eql([1,2,3,4]);
        });
      });
    });
    describe('maximumBy', () => {
      describe('(compare, [1,3,2,4,2])', () => {
        it('== 4', () => {
          L.maximumBy(compare, [1,3,2,4,2]).should.be.eql(4);
        });
      });
      describe('(compare)([1,3,2,4,2])', () => {
        it('== 4', () => {
          L.maximumBy(compare)([1,3,2,4,2]).should.be.eql(4);
        });
      });
    });
    describe('minimumBy', () => {
      describe('(compare, [1,3,2,4,2])', () => {
        it('== 1', () => {
          L.minimumBy(compare, [1,3,2,4,2]).should.be.eql(1);
        });
      });
      describe('(compare)([1,3,2,4,2])', () => {
        it('== 1', () => {
          L.minimumBy(compare)([1,3,2,4,2]).should.be.eql(1);
        });
      });
    });
  });
});

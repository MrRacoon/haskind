import should from 'should';
import { fibs } from './helpers';
import { Data, util } from '.';

const { id } = util;
const { List, Ord, Maybe, Eq } = Data;
const { lt, compare } = Ord;
const { Just, Nothing } = Maybe;
const { eq } = Eq;

const isEven = x => x % 2 === 0;

describe('List .', () => {
  describe('Basic Functions', () => {
    describe('head', () => {
      describe('([])', () => {
        it('errors: haskind.List.head: empty list', () => {
          (() => { List.head([]); }).should.throw('haskind.List.head: empty list');
        });
      });
      describe('([1])', () => {
        it('== 1', () => {
          List.head([1]).should.be.eql(1);
        });
      });
      describe('([1,2])', () => {
        it('== 1', () => {
          List.head([1, 2]).should.be.eql(1);
        });
      });
      describe('([1,2,3])', () => {
        it('== 1', () => {
          List.head([1, 2, 3]).should.be.eql(1);
        });
      });
    });
    describe('last', () => {
      describe('([])', () => {
        it('errors: haskind.List.last: empty list', () => {
          (() => { List.last([]); }).should.throw('haskind.List.last: empty list');
        });
      });
      describe('([1])', () => {
        it('== 1', () => {
          List.last([1]).should.be.eql(1);
        });
      });
      describe('([1,2])', () => {
        it('== 2', () => {
          List.last([1, 2]).should.be.eql(2);
        });
      });
      describe('([1,2,3])', () => {
        it('== 3', () => {
          List.last([1, 2, 3]).should.be.eql(3);
        });
      });
    });
    describe('tail', () => {
      describe('([])', () => {
        it('== []', () => {
          List.tail([]).should.be.eql([]);
        });
      });
      describe('([1])', () => {
        it('== []', () => {
          List.tail([1]).should.be.eql([]);
        });
      });
      describe('([1,2])', () => {
        it('== [2]', () => {
          List.tail([1,2]).should.be.eql([2]);
        });
      });
      describe('([1,2,3])', () => {
        it('== [2,3]', () => {
          List.tail([1,2,3]).should.be.eql([2,3]);
        });
      });
    });
    describe('init', () => {
      describe('([])', () => {
        it('errors: haskind.List.init: empty list', () => {
          (() => { List.init([]); }).should.throw('haskind.List.init: empty list');
        });
      });
      describe('([1])', () => {
        it('== []', () => {
          List.init([1]).should.be.eql([]);
        });
      });
      describe('([1,2])', () => {
        it('== [1]', () => {
          List.init([1, 2]).should.be.eql([1]);
        });
      });
      describe('([1,2,3])', () => {
        it('== [1,2]', () => {
          List.init([1, 2, 3]).should.be.eql([1,2]);
        });
      });
    });
    describe('length', () => {
      describe('([])', () => {
        it('== 0', () => {
          should(List.length([])).be.eql(0);
        });
      });
      describe('({})', () => {
        it('== 0', () => {
          should(List.length({})).be.eql(0);
        });
      });
      describe('([1])', () => {
        it('== 1', () => {
          should(List.length([1])).be.eql(1);
        });
      });
      describe('([1,2])', () => {
        it('== 2', () => {
          should(List.length([1,2])).be.eql(2);
        });
      });
      describe('([1,2,3])', () => {
        it('== 3', () => {
          should(List.length([1,2,3])).be.eql(3);
        });
      });
      describe('({ "1" : 1 })', () => {
        it('== 1', () => {
          should(List.length({ '1': 1 })).be.eql(1);
        });
      });
      describe('({ "1" : 1, "2": 3 })', () => {
        it('== 2', () => {
          should(List.length({ '1': 1, '2': 3 })).be.eql(2);
        });
      });
    });
  });
  describe('List.st transformations', () => {
    describe('map', () => {
      describe('(id, [1,2,3])', () => {
        it('== [1,2,3]]', () => {
          List.map(id, [1,2,3]).should.eql([1,2,3]);
        });
      });
      describe('(succ, [1,2,3])', () => {
        it('== [2,3,4]', () => {
          const fn = x => x + 1;
          List.map(fn, [1,2,3]).should.eql([2,3,4]);
        });
      });
      describe('(succ)([1,2,3])', () => {
        it('== [2,3,4]', () => {
          const fn = x => x + 1;
          List.map(fn)([1,2,3]).should.eql([2,3,4]);
        });
      });
    });
    describe('reverse', () => {
      describe('([])', () => {
        it('== []', () => {
          List.reverse([]).should.be.eql([]);
        });
      });
      describe('([1])', () => {
        it('== [1]', () => {
          List.reverse([1]).should.be.eql([1]);
        });
      });
      describe('([1,2])', () => {
        it('== [2,1]', () => {
          List.reverse([1,2]).should.be.eql([2,1]);
        });
      });
      describe('([1,2,3])', () => {
        it('== [3,2,1]', () => {
          List.reverse([1,2,3]).should.be.eql([3,2,1]);
        });
      });
      describe('("123")', () => {
        it('== "321"', () => {
          List.reverse('123').should.be.eql('321');
        });
      });
      describe('("reverse")', () => {
        it('== "esrever"', () => {
          List.reverse('reverse').should.be.eql('esrever');
        });
      });
    });
    describe('intersperse', () => {
      describe('(",", "000")', () => {
        it('== "0,0,0"', () => {
          List.intersperse(',', '000').should.be.eql('0,0,0');
        });
      });
      describe('(",")("000")', () => {
        it('== "0,0,0"', () => {
          List.intersperse(',')('000').should.be.eql('0,0,0');
        });
      });
      describe('(",", ["0", "0", "0"])', () => {
        it('== ["0", ",", "0", ",", "0"]', () => {
          List.intersperse(',', ['0', '0', '0']).should.be.eql(['0', ',', '0', ',', '0']);
        });
      });
      describe('(",")(["0", "0", "0"])', () => {
        it('== ["0", ",", "0", ",", "0"]', () => {
          List.intersperse(',')(['0', '0', '0']).should.be.eql(['0', ',', '0', ',', '0']);
        });
      });
    });
  });
  describe('Reducing lists (folds)', () => {
    describe('foldl', () => {
      describe('(id, 0, [1,2,3])', () => {
        it('== 0', () => {
          List.foldl(id, 0, [1,2,3]).should.eql(0);
        });
      });
      describe('(add, 0, [1,2,3])', () => {
        it('== 6', () => {
          const fn = (acc, x) => acc + x;
          List.foldl(fn, 0, [1,2,3]).should.eql(6);
        });
      });
      describe('(add, 0)([1,2,3])', () => {
        it('== 6', () => {
          const fn = (acc, x) => acc + x;
          List.foldl(fn, 0)([1,2,3]).should.eql(6);
        });
      });
      describe('(add)(0, [1,2,3])', () => {
        it('== 6', () => {
          const fn = (acc, x) => acc + x;
          List.foldl(fn)(0, [1,2,3]).should.eql(6);
        });
      });
      describe('(add)(0)([1,2,3])', () => {
        it('== 6', () => {
          const fn = (acc, x) => acc + x;
          List.foldl(fn)(0)([1,2,3]).should.eql(6);
        });
      });
    });
  });
  describe('Special folds', () => {
    describe('concat', () => {
      describe('([[1], [2,3], [], [[1], []]])', () => {
        it('== [1,2,3,[1],[]]', () => {
          List.concat([[1], [2,3], [], [[1], []]]).should.be.eql([1,2,3,[1],[]]);
        });
      });
    });
    describe('and', () => {
      describe('([])', () => {
        it('== true', () => {
          List.and([]).should.be.eql(true);
        });
      });
      describe('([true])', () => {
        it('== true', () => {
          List.and([true]).should.be.eql(true);
        });
      });
      describe('([true, true])', () => {
        it('== true', () => {
          List.and([true, true]).should.be.eql(true);
        });
      });
      describe('([false, true])', () => {
        it('== false', () => {
          List.and([false, true]).should.be.eql(false);
        });
      });
      describe('([true, false])', () => {
        it('== false', () => {
          List.and([true, false]).should.be.eql(false);
        });
      });
      describe('([false, false])', () => {
        it('== false', () => {
          List.and([false, false]).should.be.eql(false);
        });
      });
    });
    describe('or', () => {
      describe('([])', () => {
        it('== false', () => {
          List.or([]).should.be.eql(false);
        });
      });
      describe('([true])', () => {
        it('== true', () => {
          List.or([true]).should.be.eql(true);
        });
      });
      describe('([true, true])', () => {
        it('== true', () => {
          List.or([true, true]).should.be.eql(true);
        });
      });
      describe('([false, true])', () => {
        it('== true', () => {
          List.or([false, true]).should.be.eql(true);
        });
      });
      describe('([true, false])', () => {
        it('== true', () => {
          List.or([true, false]).should.be.eql(true);
        });
      });
      describe('([false, false])', () => {
        it('== false', () => {
          List.or([false, false]).should.be.eql(false);
        });
      });
    });
    describe('any', () => {
      describe('(id, [])', () => {
        it('== false', () => {
          List.any(id, []).should.be.eql(false);
        });
      });
      describe('(id, [true])', () => {
        it('== true', () => {
          List.any(id, [true]).should.be.eql(true);
        });
      });
      describe('(id, [true, true])', () => {
        it('== true', () => {
          List.any(id, [true, true]).should.be.eql(true);
        });
      });
      describe('(id, [false, true])', () => {
        it('== true', () => {
          List.any(id, [false, true]).should.be.eql(true);
        });
      });
      describe('(id, [true, false])', () => {
        it('== true', () => {
          List.any(id, [true, false]).should.be.eql(true);
        });
      });
      describe('(id, [false, false])', () => {
        it('== false', () => {
          List.any(id, [false, false]).should.be.eql(false);
        });
      });
      describe('(id)([true])', () => {
        it('== true', () => {
          List.any(id)([true]).should.be.eql(true);
        });
      });
    });
    describe('all', () => {
      describe('(id, [])', () => {
        it('== true', () => {
          List.all(id, []).should.be.eql(true);
        });
      });
      describe('(id, [true])', () => {
        it('== true', () => {
          List.all(id, [true]).should.be.eql(true);
        });
      });
      describe('(id, [true, true])', () => {
        it('== true', () => {
          List.all(id, [true, true]).should.be.eql(true);
        });
      });
      describe('(id, [false, true])', () => {
        it('== false', () => {
          List.all(id, [false, true]).should.be.eql(false);
        });
      });
      describe('(id, [true, false])', () => {
        it('== false', () => {
          List.all(id, [true, false]).should.be.eql(false);
        });
      });
      describe('(id, [false, false])', () => {
        it('== false', () => {
          List.all(id, [false, false]).should.be.eql(false);
        });
      });
      describe('(id)([true])', () => {
        it('== true', () => {
          List.all(id)([true]).should.be.eql(true);
        });
      });
    });
    describe('sum', () => {
      describe('([1,1,1])', () => {
        it('== 3', () => {
          List.sum([1,1,1]).should.be.eql(3);
        });
      });
      describe('([1,2,3])', () => {
        it('== 6', () => {
          List.sum([1,2,3]).should.be.eql(6);
        });
      });
      describe('([1,2,3,4])', () => {
        it('== 10', () => {
          List.sum([1,2,3,4]).should.be.eql(10);
        });
      });
    });
    describe('product', () => {
      describe('([1,1,1])', () => {
        it('== 1', () => {
          List.product([1,1,1]).should.be.eql(1);
        });
      });
      describe('([1,2,3])', () => {
        it('== 6', () => {
          List.product([1,2,3]).should.be.eql(6);
        });
      });
      describe('([1,2,3,4])', () => {
        it('== 24', () => {
          List.product([1,2,3,4]).should.be.eql(24);
        });
      });
    });
    describe('maximum', () => {
      describe('([1,1,1])', () => {
        it('== 1', () => {
          List.maximum([1,1,1]).should.be.eql(1);
        });
      });
      describe('([1,2,3])', () => {
        it('== 3', () => {
          List.maximum([1,2,3]).should.be.eql(3);
        });
      });
      describe('([1,2,3,4])', () => {
        it('== 4', () => {
          List.maximum([1,2,3,4]).should.be.eql(4);
        });
      });
      describe('([1,8,3,4])', () => {
        it('== 8', () => {
          List.maximum([1,8,3,4]).should.be.eql(8);
        });
      });
    });
    describe('minimum', () => {
      describe('([1,1,1])', () => {
        it('== 1', () => {
          List.minimum([1,1,1]).should.be.eql(1);
        });
      });
      describe('([1,2,3])', () => {
        it('== 1', () => {
          List.minimum([1,2,3]).should.be.eql(1);
        });
      });
      describe('([1,2,3,4])', () => {
        it('== 1', () => {
          List.minimum([1,2,3,4]).should.be.eql(1);
        });
      });
      describe('([1,8,3,4])', () => {
        it('== 1', () => {
          List.minimum([1,8,3,4]).should.be.eql(1);
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
          List.take(2, [1,2,3,4]).should.be.eql([1,2]);
        });
      });
      describe('(2)([1,2,3,4])', () => {
        it('== [1,2]', () => {
          List.take(2)([1,2,3,4]).should.be.eql([1,2]);
        });
      });
      describe('(1, [1,2,3,4])', () => {
        it('== [1]', () => {
          List.take(1, [1,2,3,4]).should.be.eql([1]);
        });
      });
      describe('(0, [1,2,3,4])', () => {
        it('== []', () => {
          List.take(0, [1,2,3,4]).should.be.eql([]);
        });
      });
      describe('(-1, [1,2,3,4])', () => {
        it('== []', () => {
          List.take(-1, [1,2,3,4]).should.be.eql([]);
        });
      });
      describe('(-1, [1,2,3,4])', () => {
        it('== []', () => {
          List.take(-1, [1,2,3,4]).should.be.eql([]);
        });
      });
      xdescribe('(5, fibs())', () => {
        it('== [1,1,2,3,5]', () => {
          List.take(1, fibs()).should.be.eql([1,1,2,3,5]);
        });
      });
    });
    describe('drop', () => {
      describe('(2, [1,2,3,4])', () => {
        it('== [3,4]', () => {
          List.drop(2, [1,2,3,4]).should.be.eql([3,4]);
        });
      });
      describe('(2)([1,2,3,4])', () => {
        it('== [3,4]', () => {
          List.drop(2)([1,2,3,4]).should.be.eql([3,4]);
        });
      });
      describe('(1, [1,2,3,4])', () => {
        it('== [2,3,4]', () => {
          List.drop(1, [1,2,3,4]).should.be.eql([2,3,4]);
        });
      });
      describe('(0, [1,2,3,4])', () => {
        it('== [1,2,3,4]', () => {
          List.drop(0, [1,2,3,4]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(-1, [1,2,3,4])', () => {
        it('== [1,2,3,4]', () => {
          List.drop(-1, [1,2,3,4]).should.be.eql([1,2,3,4]);
        });
      });
    });
    xdescribe('splitAt', () => {
      describe('(-1, [1,2,3,4,5])', () => {
        it('== [[], [1,2,3,4,5]]', () => {
          List.splitAt(3, [1,2,3,4,5]).should.be.eql([[1,2,3], [4,5]]);
        });
      });
      describe('(0, [1,2,3,4,5])', () => {
        it('== [[], [1,2,3,4,5]]', () => {
          List.splitAt(3, [1,2,3,4,5]).should.be.eql([[1,2,3], [4,5]]);
        });
      });
      describe('(3, [1,2,3,4,5])', () => {
        it('== [[1,2,3], [4,5]]', () => {
          List.splitAt(3, [1,2,3,4,5]).should.be.eql([[1,2,3], [4,5]]);
        });
      });
      describe('(9, [1,2,3,4,5])', () => {
        it('== [[1,2,3,4,5], []]', () => {
          List.splitAt(3, [1,2,3,4,5]).should.be.eql([[1,2,3], [4,5]]);
        });
      });
    });
    xdescribe('splitOn', () => {
      describe('(".", "some.dot.string")', () => {
        it('== ["some", "dot", "string"]', () => {
          List.splitOn('.', 'some.dot.string').should.be.eql(['some', 'dot', 'string']);
        });
      });
      describe('(".")("some.dot.string")', () => {
        it('== ["some", "dot", "string"]', () => {
          List.splitOn('.')('some.dot.string').should.be.eql(['some', 'dot', 'string']);
        });
      });
      describe('(1, [0,1,0,0,1,1,0,0,1,0])', () => {
        it('== [[0], [0,0], [], [0,0], [0]]', () => {
          List.splitOn(1, [0,1,0,0,1,1,0,0,1,0]).should.be.eql([[0], [0,0], [], [0,0], [0]]);
        });
      });
    });
    xdescribe('takeWhile', () => {
      describe('(lt(3), [1,2,3,4,5])', () => {
        it('== [1,2]', () => {
          List.takeWhile(lt(3), [1,2,3,4,5]).should.be.eql([1,2]);
        });
      });
      describe('(lt(3))([1,2,3,4,5])', () => {
        it('== [1,2]', () => {
          List.takeWhile(lt(3))([1,2,3,4,5]).should.be.eql([1,2]);
        });
      });
      describe('(lt(3), [1,2,3,2,1])', () => {
        it('== [1,2]', () => {
          List.takeWhile(lt(3), [1,2,3,2,1]).should.be.eql([1,2]);
        });
      });
      describe('(lt(3), [5,1,2,3,2,1])', () => {
        it('== []', () => {
          List.takeWhile(lt(3), [5,1,2,3,2,1]).should.be.eql([]);
        });
      });
      describe('(lt(3), [,1,2,2,1])', () => {
        it('== [1,2,2,1]', () => {
          List.takeWhile(lt(3), [1,2,2,1]).should.be.eql([1,2,2,1]);
        });
      });
    });
    xdescribe('dropWhile', () => {
      describe('(lt(3), [1,2,3,4,5])', () => {
        it('== [3,4,5]', () => {
          List.dropWhile(lt(3), [1,2,3,4,5]).should.be.eql([3,4,5]);
        });
      });
      describe('(lt(3))([1,2,3,4,5])', () => {
        it('== [3,4,5]', () => {
          List.dropWhile(lt(3))([1,2,3,4,5]).should.be.eql([3,4,5]);
        });
      });
      describe('(lt(3), [1,2,3,2,1])', () => {
        it('== [3,2,1]', () => {
          List.dropWhile(lt(3), [1,2,3,2,1]).should.be.eql([3,2,1]);
        });
      });
      describe('(lt(3), [1,2,2,1])', () => {
        it('== []', () => {
          List.dropWhile(lt(3), [1,2,2,1]).should.be.eql([]);
        });
      });
    });
    // dropWhileEnd :: (a -> Bool) -> [a] -> [a]
    xdescribe('dropWhileEnd', () => {
      describe('(lt(3), [1,2,3,4,5])', () => {
        it('== [1,2,3,4,5]', () => {
          List.dropWhileEnd(lt(3), [1,2,3,4,5]).should.be.eql([1,2,3,4,5]);
        });
      });
      describe('(lt(3), [1,2,3,2,1])', () => {
        it('== [1,2,3,2,1]', () => {
          List.dropWhileEnd(lt(3), [1,2,3,2,1]).should.be.eql([1,2,3]);
        });
      });
      describe('(lt(3)([1,2,3,2,1])', () => {
        it('== [1,2,3,2,1]', () => {
          List.dropWhileEnd(lt(3))([1,2,3,2,1]).should.be.eql([1,2,3]);
        });
      });
      describe('(lt(3), [1,2,2,1])', () => {
        it('== []', () => {
          List.dropWhileEnd(lt(3), [1,2,2,1]).should.be.eql([]);
        });
      });
    });
    // span :: (a -> Bool) -> [a] -> ([a], [a])
    xdescribe('span', () => {
      describe('(lt(3), [1,2,3,4,5])', () => {
        it('== [[1,2], [3,4,5]]', () => {
          List.span(lt(3), [1,2,3,4,5]).should.be.eql([[1,2], [3,4,5]]);
        });
      });
      describe('(lt(3)([1,2,3,4,5])', () => {
        it('== [[1,2], [3,4,5]]', () => {
          List.span(lt(3))([1,2,3,4,5]).should.be.eql([[1,2], [3,4,5]]);
        });
      });
      describe('(lt(3), [1,2,2,1])', () => {
        it('== [[1,2,2,1], []]', () => {
          List.span(lt(3), [1,2,2,1]).should.be.eql([[1,2,2,1], []]);
        });
      });
      describe('(lt(3), [3,1,2,2,1])', () => {
        it('== [[], [3,1,2,2,1]]', () => {
          List.span(lt(3), [3,1,2,2,1]).should.be.eql([[], [3,1,2,2,1]]);
        });
      });
    });
    // break :: (a -> Bool) -> [a] -> ([a], [a])
    xdescribe('break', () => {
      describe('(lt(3), [1,2,3,4,5])', () => {
        it('== [[],[1,2,3,4,5]]', () => {
          List.break(lt(3), [1,2,3,4,5]).should.be.eql([[], [1,2,3,4,5]]);
        });
      });
      describe('(lt(3))([1,2,3,4,5])', () => {
        it('== [[],[1,2,3,4,5]]', () => {
          List.break(lt(3))([1,2,3,4,5]).should.be.eql([[], [1,2,3,4,5]]);
        });
      });
      describe('(lt(3), [5,4,3,2,1,2,3,4,5])', () => {
        it('== [[5,4,3],[2,1,2,3,4,5]]', () => {
          List.break(lt(3), [5,4,3,2,1,2,3,4,5]).should.be.eql([[5,4,3], [2,1,2,3,4,5]]);
        });
      });
      describe('(lt(3), [5,4,3,4,5])', () => {
        it('== [[5,4,3,4,5],[]]', () => {
          List.break(lt(3), [5,4,3,4,5]).should.be.eql([[5,4,3,4,5], []]);
        });
      });
    });
    // stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
    xdescribe('stripPrefix', () => {
      describe('([], [])', () => {
        it('== Just([])', () => {
          List.stripPrefix([], []).should.be.eql(Just([]));
        });
      });
      describe('([1,2], [])', () => {
        it('== Nothing()', () => {
          List.stripPrefix([1,2], []).should.be.eql(Nothing());
        });
      });
      describe('([], [1,2])', () => {
        it('== Just([1,2])', () => {
          List.stripPrefix([], [1,2]).should.be.eql(Just([1,2]));
        });
      });
      describe('([1], [1,2])', () => {
        it('== Just([2])', () => {
          List.stripPrefix([1], [1,2]).should.be.eql(Just([2]));
        });
      });
      describe('([1])([1,2])', () => {
        it('== Just([2])', () => {
          List.stripPrefix([1])([1,2]).should.be.eql(Just([2]));
        });
      });
      describe('([1,2], [1,2])', () => {
        it('== Just([])', () => {
          List.stripPrefix([1,2], [1,2]).should.be.eql(Just([]));
        });
      });
    });
    // group :: Eq a => [a] -> [[a]]
    xdescribe('group', () => {
      describe('([])', () => {
        it('description', () => {
          List.group([]).should.be.eql([]);
        });
      });
      describe('([1,2,1,1])', () => {
        it('== [[1], [2], [1,1]]', () => {
          List.group([1,2,1,1]).should.be.eql([[1], [2], [1,1]]);
        });
      });
      describe('([1,1,1])', () => {
        it('== [[1,1,1]]', () => {
          List.group([1,1,1]).should.be.eql([[1,1,1]]);
        });
      });
    });
    // inits :: [a] -> [[a]]
    xdescribe('inits', () => {
      describe('([])', () => {
        it('== [[]]', () => {
          List.inits([]).should.be.eql([[]]);
        });
      });
      describe('([1])', () => {
        it('== [[], [1]]', () => {
          List.inits([1]).should.be.eql([[], [1]]);
        });
      });
      describe('([1,2,3])', () => {
        it('== [[], [1], [1,2], [1,2,3]]', () => {
          List.inits([1,2,3]).should.be.eql([[], [1], [1,2], [1,2,3]]);
        });
      });
    });
    // tails :: [a] -> [[a]]
    xdescribe('tails', () => {
      describe('([])', () => {
        it('== [[]]', () => {
          List.tails([]).should.be.eql([[]]);
        });
      });
      describe('([1])', () => {
        it('== [[1], []]', () => {
          List.tails([1,2,3]).should.be.eql([[1], []]);
        });
      });
      describe('([1,2,3])', () => {
        it('== [[1,2,3], [2,3], [3], []]', () => {
          List.tails([1,2,3]).should.be.eql([[1,2,3], [2,3], [3], []]);
        });
      });
    });
  });
  xdescribe('Predicates', () => {
    describe('isPrefixOf', () => {
      describe('([], [1,2,3])', () => {
        it('== true', () => {
          List.isPrefixOf([], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1], [1,2,3])', () => {
        it('== true', () => {
          List.isPrefixOf([1], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,2], [1,2,3])', () => {
        it('== true', () => {
          List.isPrefixOf([1,2], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,2,3], [1,2,3])', () => {
        it('== true', () => {
          List.isPrefixOf([1,2,3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,2,3,2], [1,2,3])', () => {
        it('== false', () => {
          List.isPrefixOf([1,2,3,2], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([2], [1,2,3])', () => {
        it('== false', () => {
          List.isPrefixOf([2], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([1,2,3])([1,2,3])', () => {
        it('== true', () => {
          List.isPrefixOf([1,2,3])([1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,1,2,3,5], fibs())', () => {
        it('== false', () => {
          List.isPrefixOf([1,1,2,3,5], fibs()).should.be.eql(true);
        });
      });
    });
    describe('isSuffixOf', () => {
      describe('([], [1,2,3])', () => {
        it('== true', () => {
          List.isSuffixOf([], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([3], [1,2,3])', () => {
        it('== true', () => {
          List.isSuffixOf([3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([2,3], [1,2,3])', () => {
        it('== true', () => {
          List.isSuffixOf([2,3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,2,3], [1,2,3])', () => {
        it('== true', () => {
          List.isSuffixOf([1,2,3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([2], [1,2,3])', () => {
        it('== false', () => {
          List.isSuffixOf([2], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([1,2,3])([1,2,3])', () => {
        it('== true', () => {
          List.isSuffixOf([1,2,3])([1,2,3]).should.be.eql(true);
        });
      });
    });
    describe('isInfixOf', () => {
      describe('([], [1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([2], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1], [1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([1], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([2], [1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([2], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([3], [1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,2], [1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([1,2], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([2,3], [1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([2,3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,3], [1,2,3])', () => {
        it('== false', () => {
          List.isInfixOf([1,3], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([4], [1,2,3])', () => {
        it('== false', () => {
          List.isInfixOf([3], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([2,3])([1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([2,3])([1,2,3]).should.be.eql(true);
        });
      });
    });
    describe('isSubsequenceOf', () => {
      describe('([], [1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1], [1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([1], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([3], [1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([4], [1,2,3])', () => {
        it('== false', () => {
          List.isInfixOf([4], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([1,2], [1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([1,2], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,3], [1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([1,3], [1,2,3]).should.be.eql(true);
        });
      });
      describe('([1,4], [1,2,3])', () => {
        it('== false', () => {
          List.isInfixOf([1,4], [1,2,3]).should.be.eql(false);
        });
      });
      describe('([1,3])([1,2,3])', () => {
        it('== true', () => {
          List.isInfixOf([1,3])([1,2,3]).should.be.eql(true);
        });
      });
    });
  });
  describe('Searching by equality', () => {
    describe('elem', () => {
      describe('(2, [])', () => {
        it('== false', () => {
          List.elem(2, []).should.be.false;
        });
      });
      describe('(2, [1])', () => {
        it('== false', () => {
          List.elem(2, [1]).should.be.false;
        });
      });
      describe('(2, [1,2])', () => {
        it('== true', () => {
          List.elem(2, [1,2]).should.be.true;
        });
      });
      describe('(2)([1,2])', () => {
        it('== true', () => {
          List.elem(2)([1,2]).should.be.true;
        });
      });
    });
    describe('notElem', () => {
      describe('(2, [])', () => {
        it('== true', () => {
          List.notElem(2, []).should.be.true;
        });
      });
      describe('(2, [1])', () => {
        it('== true', () => {
          List.notElem(2, [1]).should.be.true;
        });
      });
      describe('(2, [1,2])', () => {
        it('== false', () => {
          List.notElem(2, [1,2]).should.be.false;
        });
      });
      describe('(2)([1,2])', () => {
        it('== false', () => {
          List.notElem(2)([1,2]).should.be.false;
        });
      });
    });
    xdescribe('lookup', () => {
      describe('(1, [[1, "a"], [2, "b"], [3, "c"]])', () => {
        it('== Just("a")', () => {
          List.lookup(1, [[1, 'a'], [2, 'b'], [3, 'c']]).should.be.eql('a');
        });
      });
      describe('(2, [[1, "a"], [2, "b"], [3, "c"]])', () => {
        it('== Just("b")', () => {
          List.lookup(2, [[1, 'a'], [2, 'b'], [3, 'c']]).should.be.eql('b');
        });
      });
      describe('(3, [[1, "a"], [2, "b"], [3, "c"]])', () => {
        it('== Just("c")', () => {
          List.lookup(3, [[1, 'a'], [2, 'b'], [3, 'c']]).should.be.eql('c');
        });
      });
      describe('(4, [[1, "a"], [2, "b"], [3, "c"]])', () => {
        it('== Nothing()', () => {
          List.lookup(3, [[1, 'a'], [2, 'b'], [3, 'c']]).should.be.eql(Nothing());
        });
      });
    });
  });
  describe('Searching with a predicate ', () => {
    xdescribe('find', () => {
      describe('(lt(3), [1,2,3,4,5])', () => {
        it('== 1', () => {
          List.find(lt(3), [1,2,3,4,5]).should.be.eql(1);
        });
      });
      describe('(lt(3), [5,4,3,2,1])', () => {
        it('== 1', () => {
          List.find(lt(3), [5,4,3,2,1]).should.be.eql(2);
        });
      });
    });
    describe('filter', () => {
      describe('(id, [1,2,3])', () => {
        it('== [1,2,3]', () => {
          List.filter(id, [1,2,3]).should.eql([1,2,3]);
        });
      });
      describe('(isEven, [1,2,3])', () => {
        it('== [2]', () => {
          List.filter(isEven, [1,2,3]).should.eql([2]);
        });
      });
      describe('(isEven)([1,2,3])', () => {
        it('== [2]', () => {
          List.filter(isEven)([1,2,3]).should.eql([2]);
        });
      });
    });
    xdescribe('partition', () => {
      describe('(isEven, [])', () => {
        it('== [[], []]', () => {
          List.partition(isEven, []).should.be.eql([[], []]);
        });
      });
      describe('(isEven, [1,2,3,4])', () => {
        it('== [[2,4], [1,3]]', () => {
          List.partition(isEven, [1,2,3,4]).should.be.eql([[2,4], [1,3]]);
        });
      });
      describe('(isEven)([1,2,3,4])', () => {
        it('== [[2,4], [1,3]]', () => {
          List.partition(isEven)([1,2,3,4]).should.be.eql([[2,4], [1,3]]);
        });
      });
    });
  });
  describe('Indexing lists', () => {
    describe('index', () => {
      describe('([1,2,3], 0)', () => {
        it('== 1', () => {
          List.index([1,2,3], 0).should.be.eql(1);
        });
      });
      describe('([1,2,3], 1)', () => {
        it('== 2', () => {
          List.index([1,2,3], 1).should.be.eql(2);
        });
      });
      describe('([1,2,3], 2)', () => {
        it('== 3', () => {
          List.index([1,2,3], 2).should.be.eql(3);
        });
      });
      describe('([1,2,3])(2)', () => {
        it('== 3', () => {
          List.index([1,2,3])(2).should.be.eql(3);
        });
      });
      describe('([1,2,3], 3)', () => {
        it('errors: haskind.List.index: index too large', () => {
          (() => List.index([1,2,3], 3)).should.throw('haskind.List.index: index too large');
        });
      });
      describe('([1,2,3], 42)', () => {
        it('errors: haskind.List.index: index too large', () => {
          (() => List.index([1,2,3], 42)).should.throw('haskind.List.index: index too large');
        });
      });
      describe('([1,2,3], -1)', () => {
        it('errors: haskind.List.index: negative index', () => {
          (() => List.index([1,2,3], -1)).should.throw('haskind.List.index: negative index');
        });
      });
    });
    describe('elemIndex', () => {
      describe('(4, [1,2,3,4,5])', () => {
        it('== Just(3)', () => {
          List.elemIndex(4, [1,2,3,4,5]).should.be.eql(Just(3));
        });
      });
      describe('(4)([1,2,3,4,5])', () => {
        it('== Just(3)', () => {
          List.elemIndex(4)([1,2,3,4,5]).should.be.eql(Just(3));
        });
      });
      describe('(2, [1,2,3,4,5])', () => {
        it('== Just(1)', () => {
          List.elemIndex(2)([1,2,3,4,5]).should.be.eql(Just(1));
        });
      });
      describe('(7, [1,2,3,4,5])', () => {
        it('== Nothing()', () => {
          List.elemIndex(7)([1,2,3,4,5]).should.be.eql(Nothing());
        });
      });
    });
    describe('elemIndices', () => {
      describe('(1, [])', () => {
        it('== []', () => {
          List.elemIndices(1, []).should.be.eql([]);
        });
      });
      describe('(1, [2,3,4])', () => {
        it('== []', () => {
          List.elemIndices(1, [2,3,4]).should.be.eql([]);
        });
      });
      describe('(1, [1,2,3,4,1])', () => {
        it('== [0,4]', () => {
          List.elemIndices(1, [1,2,3,4,1]).should.be.eql([0,4]);
        });
      });
      describe('(1)([1,2,3,4,1])', () => {
        it('== [0,4]', () => {
          List.elemIndices(1)([1,2,3,4,1]).should.be.eql([0,4]);
        });
      });
    });
    describe('findIndex', () => {
      describe('(isEven, [1,2,3,4,5])', () => {
        it('== Just(2)', () => {
          List.findIndex(isEven, [1,2,3,4,5]).should.be.eql(Just(1));
        });
      });
      describe('(isEven)([1,2,3,4,5])', () => {
        it('== Just(2)', () => {
          List.findIndex(isEven)([1,2,3,4,5]).should.be.eql(Just(1));
        });
      });
      describe('(over9000, [1,2,3,4,5])', () => {
        it('== Nothing()', () => {
          const over9000 = (n) => n > 9000;
          List.findIndex(over9000, [1,2,3,4,5]).should.be.eql(Nothing());
        });
      });
    });
    describe('findIndices', () => {
      describe('(isEven, [])', () => {
        it('== []', () => {
          List.findIndices(isEven, []).should.be.eql([]);
        });
      });
      describe('(isEven, [1,2,3,4])', () => {
        it('== [1,3]', () => {
          List.findIndices(isEven, [1,2,3,4]).should.be.eql([1,3]);
        });
      });
      describe('(isEven)([1,2,3,4])', () => {
        it('== [1,3]', () => {
          List.findIndices(isEven)([1,2,3,4]).should.be.eql([1,3]);
        });
      });
      describe('(isEven, [2,2,2,2,2])', () => {
        it('== [0,1,2,3,4]', () => {
          List.findIndices(isEven, [2,2,2,2,2]).should.be.eql([0,1,2,3,4]);
        });
      });
      describe('(isEven, [1,1,1,1,1])', () => {
        it('== []', () => {
          List.findIndices(isEven, [1,1,1,1,1]).should.be.eql([]);
        });
      });
    });
  });
  describe('Zipping and unzipping lists', () => {
    describe('zip', () => {
      describe('([], [])', () => {
        it('== []', () => {
          List.zip([], []).should.be.eql([]);
        });
      });
      describe('([1,2], [1,2,3])', () => {
        it('== [[1,1], [2,2]]', () => {
          List.zip([1,2], [1,2,3]).should.be.eql([[1,1], [2,2]]);
        });
      });
      describe('([1,2])([1,2,3])', () => {
        it('== [[1,1], [2,2]]', () => {
          List.zip([1,2])([1,2,3]).should.be.eql([[1,1], [2,2]]);
        });
      });
    });
    describe('unzip', () => {
      describe('([])', () => {
        it('== []', () => {
          List.unzip([]).should.be.eql([[],[]]);
        });
      });
      describe('([[1,1], [2,2], [4,5]])', () => {
        it('== [[1,2,4], [1,2,5]]', () => {
          List.unzip([[1,1], [2,2], [4,5]]).should.be.eql([[1,2,4], [1,2,5]]);
        });
      });
      describe('([1,2])([1,2,3])', () => {
        it('== [[1,1], [2,2]]', () => {
          List.zip([1,2])([1,2,3]).should.be.eql([[1,1], [2,2]]);
        });
      });
    });
  });
  xdescribe('Functions on strings', () => {
    describe('lines', () => {
      describe('("")', () => {
        it('== []', () => {
          List.lines('').should.be.eql([]);
        });
      });
      describe('("\\n")', () => {
        it('== [""]', () => {
          List.lines('\\n').should.be.eql(['']);
        });
      });
      describe('("one")', () => {
        it('== ["one"]', () => {
          List.lines('one').should.be.eql(['one']);
        });
      });
      describe('("one\\n")', () => {
        it('== ["one"]', () => {
          List.lines('one\\n').should.be.eql(['one']);
        });
      });
      describe('("one\\n\\n")', () => {
        it('== ["one", ""]', () => {
          List.lines('"one\\n\\n"').should.be.eql(['one', '']);
        });
      });
      describe('("one\\ntwo")', () => {
        it('== ["one", "two"]', () => {
          List.lines('one\\ntwo').should.be.eql(['one', 'two']);
        });
      });
      describe('("one\\ntwo\\n")', () => {
        it('== ["one", "two"]', () => {
          List.lines('one\\ntwo\\n').should.be.eql(['one', 'two']);
        });
      });
    });
    describe('words', () => {
      describe('("")', () => {
        it('== []', () => {
          List.words('').should.be.eql([]);
        });
      });
      describe('("one")', () => {
        it('== ["one"]', () => {
          List.words('one').should.be.eql(['one']);
        });
      });
      describe('("one ")', () => {
        it('== ["one"]', () => {
          List.words('one ').should.be.eql(['one']);
        });
      });
      describe('("one two")', () => {
        it('== ["one", "two"]', () => {
          List.words('one two').should.be.eql(['one', 'two']);
        });
      });
      describe('("one two ")', () => {
        it('== ["one", "two"]', () => {
          List.words('one two ').should.be.eql(['one', 'two']);
        });
      });
      describe('(" one two ")', () => {
        it('== ["one", "two"]', () => {
          List.words(' one two ').should.be.eql(['one', 'two']);
        });
      });
    });
    describe('unlines', () => {
      describe('([])', () => {
        it('== ""', () => {
          List.unlines([]).should.be.eql('');
        });
      });
      describe('(["one"])', () => {
        it('== "one\\n"', () => {
          List.unlines(['one']).should.be.eql('one\n');
        });
      });
      describe('(["one", "two"])', () => {
        it('== "one\\ntwo\\n"', () => {
          List.unlines(['one', 'two']).should.be.eql('one\ntwo\n');
        });
      });
    });
    describe('unwords', () => {
      describe('([])', () => {
        it('== ""', () => {
          List.unwords([]).should.be.eql('');
        });
      });
      describe('(["one"])', () => {
        it('== "one"', () => {
          List.unwords(['one']).should.be.eql('one');
        });
      });
      describe('(["one", "two"])', () => {
        it('== "one two"', () => {
          List.unwords(['one', 'two']).should.be.eql('one two');
        });
      });
      describe('(["one ", " two"])', () => {
        it('== "one   two"', () => {
          List.unwords(['one ', ' two']).should.be.eql('one   two');
        });
      });
    });
  });
  describe('"Set" operations', () => {
    describe('nub', () => {
      describe('([])', () => {
        it('== []', () => {
          List.nub([]).should.be.eql([]);
        });
      });
      describe('([1,2,3])', () => {
        it('== [1,2,3]', () => {
          List.nub([1,2,3]).should.be.eql([1,2,3]);
        });
      });
      describe('([1,2,3,4,2,1,4,6])', () => {
        it('== [1,2,3,4,6]', () => {
          List.nub([1,2,3,4,2,1,4,6]).should.be.eql([1,2,3,4,6]);
        });
      });
    });
    describe('delete_', () => {
      describe('(3, [1,2,3,3,4,3])', () => {
        it('== [1,2,3,4,3]', () => {
          List.delete_(3, [1,2,3,3,4,3]).should.be.eql([1,2,3,4,3]);
        });
      });
      describe('("a", "banana")', () => {
        it('== "bnana"', () => {
          List.delete_('a', 'banana').should.be.eql('bnana');
        });
      });
      describe('("a")("banana")', () => {
        it('== "bnana"', () => {
          List.delete_('a')('banana').should.be.eql('bnana');
        });
      });
    });
    describe('difference', () => {
      describe('([1,2,3], [2,3,4])', () => {
        it('== [1]', () => {
          List.difference([1,2,3], [2,3,4]).should.be.eql([1]);
        });
      });
      describe('([1,2,3])([2,3,4])', () => {
        it('== [1]', () => {
          List.difference([1,2,3])([2,3,4]).should.be.eql([1]);
        });
      });
      describe('([1,2,3,4,5], [2,3,4])', () => {
        it('== [1,5]', () => {
          List.difference([1,2,3,4,5], [2,3,4]).should.be.eql([1,5]);
        });
      });
    });
    describe('union', () => {
      describe('([1,2,3,4], [2,4,6,8])', () => {
        it('== [1,2,3,4,6,8]', () => {
          List.union([1,2,3,4], [2,4,6,8]).should.be.eql([1,2,3,4,6,8]);
        });
      });
      describe('([1,2,3,4])([2,4,6,8])', () => {
        it('== [1,2,3,4,6,8]', () => {
          List.union([1,2,3,4])([2,4,6,8]).should.be.eql([1,2,3,4,6,8]);
        });
      });
      describe('([1,2,2,3,4], [6,4,4,2])', () => {
        it('== [1,2,2,3,4,6]', () => {
          List.union([1,2,2,3,4], [6,4,4,2]).should.be.eql([1,2,2,3,4,6]);
        });
      });
    });
    describe('intersect', () => {
      describe('([1,2,3,4], [2,4,6,8])', () => {
        it('== [2,4]', () => {
          List.intersect([1,2,3,4], [2,4,6,8]).should.be.eql([2,4]);
        });
      });
      describe('([1,2,3,4])([2,4,6,8])', () => {
        it('== [2,4]', () => {
          List.intersect([1,2,3,4])([2,4,6,8]).should.be.eql([2,4]);
        });
      });
      describe('([1,2,2,3,4], [6,4,4,2])', () => {
        it('== [2,2,4]', () => {
          List.intersect([1,2,2,3,4], [6,4,4,2]).should.be.eql([2,2,4]);
        });
      });
    });
  });
  xdescribe('Ordered List.sts', () => {
    describe('sort', () => {
      describe('([4,2,3,1])', () => {
        it('== [1,2,3,4]', () => {
          List.sort([4,2,3,1]).should.be.eql([1,2,3,4]);
        });
      });
      describe('([4,2,3,1,1,2,4,3])', () => {
        it('== [1,1,2,2,3,3,4,4]', () => {
          List.sort([4,2,3,1,1,2,4,3]).should.be.eql([1,1,2,2,3,3,4,4]);
        });
      });
    });
    describe('sortOn', () => {
      describe('(id, [4,2,3,1])', () => {
        it('== [1,2,3,4]', () => {
          List.sort(id, [4,2,3,1]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(id)([4,2,3,1])', () => {
        it('== [1,2,3,4]', () => {
          List.sort(id)([4,2,3,1]).should.be.eql([1,2,3,4]);
        });
      });
    });
    describe('insert', () => {
      describe('(3, [1,2,4])', () => {
        it('== [1,2,3,4]', () => {
          List.insert(3, [1,2,4]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(3)([1,2,4])', () => {
        it('== [1,2,3,4]', () => {
          List.insert(3)([1,2,4]).should.be.eql([1,2,3,4]);
        });
      });
    });
  });
  xdescribe('The "by" operations', () => {
    describe('nubBy', () => {
      describe('(eq, [])', () => {
        it('== []', () => {
          List.nubBy(eq, []).should.be.eql([]);
        });
      });
      describe('(eq, [1,2,3])', () => {
        it('== [1,2,3]', () => {
          List.nubBy(eq, [1,2,3]).should.be.eql([1,2,3]);
        });
      });
      describe('(eq, [1,1,2,2,3,3])', () => {
        it('== [1,2,3]', () => {
          List.nubBy(eq, [1,1,2,2,3,3]).should.be.eql([1,2,3]);
        });
      });
      describe('(eq)([1,1,2,2,3,3])', () => {
        it('== [1,2,3]', () => {
          List.nubBy(eq)([1,1,2,2,3,3]).should.be.eql([1,2,3]);
        });
      });
    });
    describe('deleteBy', () => {
      // Prelude Data.List> deleteBy (==) 1 [3,2,1,2,3,4,1]
      // [3,2,2,3,4,1]
      describe('(eq, 1 [3,2,1,2,3,4,1])', () => {
        it('== [3,2,2,3,4,1]', () => {
          List.deleteBy(eq, 1, [3,2,1,2,3,4,1]).should.eql([3,2,2,3,4,1]);
        });
      });
      // Prelude Data.List> deleteBy (<) 1 [3,2,1,2,3,4,1]
      // [2,1,2,3,4,1]
      describe('(lt, 1 [3,2,1,2,3,4,1])', () => {
        it('== [2,1,2,3,4,1]', () => {
          List.deleteBy(lt, 1, [3,2,1,2,3,4,1]).should.eql([2,1,2,3,4,1]);
        });
      });
    });
    describe('deleteFirstBy', () => {
    });
    describe('unionBy', () => {
    });
    describe('intersectBy', () => {
      // Prelude Data.List> intersectBy (==) [] []
      // []
      describe('(eq, [], [])', () => {
        it('== []', () => {
          List.intersectBy(eq, [], []).should.be.eql([]);
        });
      });
      // Prelude Data.List> intersectBy (==) [1] []
      // []
      describe('(eq, [1], [])', () => {
        it('== []', () => {
          List.intersectBy(eq, [1], []).should.be.eql([]);
        });
      });
      // Prelude Data.List> intersectBy (==) [1] [1]
      // [1]
      describe('(eq, [1], [1])', () => {
        it('== [1]', () => {
          List.intersectBy(eq, [1], [1]).should.be.eql([1]);
        });
      });
      // Prelude Data.List> intersectBy (==) [] [1]
      // []
      describe('(eq, [], [1])', () => {
        it('== []', () => {
          List.intersectBy(eq, [], [1]).should.be.eql([]);
        });
      });
      // Prelude Data.List> intersectBy (==) [1,1] [1]
      // [1,1]
      describe('(eq, [1,1], [1])', () => {
        it('== [1,1]', () => {
          List.intersectBy(eq, [1,1], [1]).should.be.eql([1,1]);
        });
      });
      // Prelude Data.List> intersectBy (==) [1] [1,1]
      // [1]
      describe('(eq, [1], [1,1])', () => {
        it('== [1]', () => {
          List.intersectBy(eq, [1], [1,1]).should.be.eql([1]);
        });
      });
      // Prelude Data.List> intersectBy (==) [1,1] [1,1]
      // [1,1]
      describe('(eq, [1,1], [1,1])', () => {
        it('== [1,1]', () => {
          List.intersectBy(eq, [1,1], [1,1]).should.be.eql([1,1]);
        });
      });
    });
    describe('groupBy', () => {
      describe('(eq, [])', () => {
        it('== []', () => {
          List.groupBy(eq, []).should.be.eql([]);
        });
      });
      describe('(eq, [1])', () => {
        it('== [[1]]', () => {
          List.groupBy(eq, [1]).should.be.eql([[1]]);
        });
      });
      describe('(eq, [1,1])', () => {
        it('== [[1,1]]', () => {
          List.groupBy(eq, [1,1]).should.be.eql([[1,1]]);
        });
      });
      describe('(eq, [1,2,2,3,3,3,2,3,1])', () => {
        it('== [[1],[2,2],[3,3,3],[2],[3],[1]]', () => {
          List.groupBy(eq, [1,2,2,3,3,3,2,3,1]).should.be.eql([[1],[2,2],[3,3,3],[2],[3],[1]]);
        });
      });
    });
  });
  xdescribe('User-supplied comparison', () => {
    describe('sortBy', () => {
      describe('(compare, [1,3,2,4])', () => {
        it('== [1,2,3,4]', () => {
          List.sortBy(compare, [1,3,2,4]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(compare)([1,3,2,4])', () => {
        it('== [1,2,3,4]', () => {
          List.sortBy(compare, [1,3,2,4]).should.be.eql([1,2,3,4]);
        });
      });
    });
    describe('insertBy', () => {
      describe('(compare, 3, [1,2,4])', () => {
        it('== [1,2,3,4]', () => {
          List.insertBy(compare, 3, [1,2,4]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(compare)(3, [1,2,4])', () => {
        it('== [1,2,3,4]', () => {
          List.insertBy(compare)(3, [1,2,4]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(compare, 3)([1,2,4])', () => {
        it('== [1,2,3,4]', () => {
          List.insertBy(compare, 3)([1,2,4]).should.be.eql([1,2,3,4]);
        });
      });
      describe('(compare)(3)([1,2,4])', () => {
        it('== [1,2,3,4]', () => {
          List.insertBy(compare)(3)([1,2,4]).should.be.eql([1,2,3,4]);
        });
      });
    });
    describe('maximumBy', () => {
      describe('(compare, [1,3,2,4,2])', () => {
        it('== 4', () => {
          List.maximumBy(compare, [1,3,2,4,2]).should.be.eql(4);
        });
      });
      describe('(compare)([1,3,2,4,2])', () => {
        it('== 4', () => {
          List.maximumBy(compare)([1,3,2,4,2]).should.be.eql(4);
        });
      });
    });
    describe('minimumBy', () => {
      describe('(compare, [1,3,2,4,2])', () => {
        it('== 1', () => {
          List.minimumBy(compare, [1,3,2,4,2]).should.be.eql(1);
        });
      });
      describe('(compare)([1,3,2,4,2])', () => {
        it('== 1', () => {
          List.minimumBy(compare)([1,3,2,4,2]).should.be.eql(1);
        });
      });
    });
  });
});

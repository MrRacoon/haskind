import * as L from '../src/List';
import should from 'should';

const id = a => a

describe('List', () => {
  describe('length', () => {
    it('works', () => {
      should(L.length([])).be.eql(0);
      should(L.length({})).be.eql(0);

      L.length([1]).should.be.eql(1);
      L.length([1, 2, 3]).should.be.eql(3);
      L.length({ '1': 1 }).should.be.eql(1);
    });
  });
  describe('map', () => {
    it('works', () => {
      const fn = x => x + 1

      L.map(id, [1,2,3]).should.eql([1,2,3]);
      L.map(fn, [1,2,3]).should.eql([2,3,4]);
    });
  });
  describe('filter', () => {
    it('works', () => {
      const fn = x => x % 2 === 0;

      L.filter(id, [1,2,3]).should.eql([1,2,3]);
      L.filter(fn, [1,2,3]).should.eql([2]);
    });
  });
  describe('foldl', () => {
    it('works', () => {
      const fn = (acc, x) => acc + x;

      L.foldl(id, 0, [1,2,3]).should.eql(0);
      L.foldl(fn, 0, [1,2,3]).should.eql(6);
    });
  });
});

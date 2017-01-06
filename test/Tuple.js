import { Tuple } from '../src/Data';

describe('Tuple .', () => {
  describe('fst', () => {
    describe('([1,2])', () => {
      it('== 1', () => {
        Tuple.fst([1,2]).should.be.eql(1);
      });
    });
    describe('([2,1])', () => {
      it('== 2', () => {
        Tuple.fst([2,1]).should.be.eql(2);
      });
    });
  });
  describe('snd', () => {
    describe('([1,2])', () => {
      it('== 2', () => {
        Tuple.snd([1,2]).should.be.eql(2);
      });
    });
    describe('([2,1])', () => {
      it('== 1', () => {
        Tuple.snd([2,1]).should.be.eql(1);
      });
    });
  });
  describe('curry', () => {
  });
  describe('uncurry', () => {
  });
  describe('swap', () => {
    describe('([1,2])', () => {
      it('== [2,1]', () => {
        Tuple.swap([1,2]).should.be.eql([2,1]);
      });
    });
    describe('([2,1])', () => {
      it('== [1,2]', () => {
        Tuple.swap([2,1]).should.be.eql([1,2]);
      });
    });
  });
});

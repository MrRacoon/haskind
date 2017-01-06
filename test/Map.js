import { Map } from '../src/Data';

describe('Map.', () => {
  describe('null', () => {
    describe('({})', () => {
      it('== true', () => {
        Map.null_({}).should.be.eql(true);
      });
    });
    describe('({ a: 1 })', () => {
      it('== false', () => {
        Map.null_({ a: 1 }).should.be.eql(false);
      });
    });
  });
  describe('size', () => {
    describe('({})', () => {
      it('=== 0', () => {
        Map.size({}).should.be.eql(0);
      });
    });
    describe('({ a:1 })', () => {
      it('=== 1', () => {
        Map.size({ a:1 }).should.be.eql(1);
      });
    });
    describe('({ a:1, b:2 })', () => {
      it('=== 2', () => {
        Map.size({ a:1, b:2 }).should.be.eql(2);
      });
    });
  });
});

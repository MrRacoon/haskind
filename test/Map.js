import * as M from '../src/Map';

describe('Map', () => {
  describe('null', () => {
    describe('({})', () => {
      it('== true', () => {
        M.null_({}).should.be.eql(true);
      });
    });
    describe('({ a: 1 })', () => {
      it('== false', () => {
        M.null_({ a: 1 }).should.be.eql(false);
      });
    });
  });
  describe('size', () => {
    describe('({})', () => {
      it('=== 0', () => {
        M.size({}).should.be.eql(0);
      });
    });
    describe('({ a:1 })', () => {
      it('=== 1', () => {
        M.size({ a:1 }).should.be.eql(1);
      });
    });
    describe('({ a:1, b:2 })', () => {
      it('=== 2', () => {
        M.size({ a:1, b:2 }).should.be.eql(2);
      });
    });
  });
});

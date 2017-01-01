import * as E from '../src/Eq';

describe('Eq', () => {
  describe('eq', () => {
    describe('(1,1)', () => {
      it('== true', () => {
        E.eq(1,1).should.be.eql(true);
      });
    });
    describe('(1)(1)', () => {
      it('== true', () => {
        E.eq(1)(1).should.be.eql(true);
      });
    });
    describe('(1,2)', () => {
      it('== false', () => {
        E.eq(1,2).should.be.eql(false);
      });
    });
    describe('(1)(2)', () => {
      it('== false', () => {
        E.eq(1)(2).should.be.eql(false);
      });
    });
  });
  describe('notEq', () => {

  });
});

import { Eq } from '../src/Data';

describe('Eq.', () => {
  describe('eq', () => {
    describe('(1,1)', () => {
      it('== true', () => {
        Eq.eq(1,1).should.be.eql(true);
      });
    });
    describe('(1)(1)', () => {
      it('== true', () => {
        Eq.eq(1)(1).should.be.eql(true);
      });
    });
    describe('(1,2)', () => {
      it('== false', () => {
        Eq.eq(1,2).should.be.eql(false);
      });
    });
    describe('(1)(2)', () => {
      it('== false', () => {
        Eq.eq(1)(2).should.be.eql(false);
      });
    });
  });
  describe('notEq', () => {

  });
});

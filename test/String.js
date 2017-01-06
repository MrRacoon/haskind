import { String } from '../src/Data';

xdescribe('String .', () => {
  describe('isString.', () => {
    describe('("string")', () => {
      it('== true', () => {
        String.isString('string').should.be.eql(true);
      });
    });
    describe('(["s", "t", "r", "i", "n", "g"])', () => {
      it('== false', () => {
        String.isString(['s', 't', 'r', 'i', 'n', 'g']).should.be.eql(true);
      });
    });
  });
  describe('fromString', () => {
    describe('("string")', () => {
      it('== ["s", "t", "r", "i", "n", "g"]', () => {
        String.fromString('string').should.be.eql(['s', 't', 'r', 'i', 'n', 'g']);
      });
    });
  });
  describe('toString', () => {
    describe('(["s", "t", "r", "i", "n", "g"])', () => {
      it('== "string"', () => {
        String.toString(['s', 't', 'r', 'i', 'n', 'g']).should.be.eql('string');
      });
    });
  });
});

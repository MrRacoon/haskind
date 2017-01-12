import should from 'should';
import { Data } from '.';
const { Function } = Data;

const inc = x => x + 1;
const add = (a,b) => a + b;
const mult = (a,b) => a * b;

describe('Function', () => {
  describe('id', () => {
    describe('(1)', () => {
      it('== 1', () => {
        Function.id(1).should.be.eql(1);
      });
    });
    describe('(2.1)', () => {
      it('== 2.1', () => {
        Function.id(2.1).should.be.eql(2.1);
      });
    });
    describe('("2")', () => {
      it('== 2', () => {
        Function.id('2').should.be.eql('2');
      });
    });
    describe('(true)', () => {
      it('== true', () => {
        Function.id(true).should.be.eql(true);
      });
    });
    describe('(null)', () => {
      it('== null', () => {
        should(Function.id(null)).be.eql(null);
      });
    });
    describe('(undefined)', () => {
      it('== undefined', () => {
        should(Function.id(undefined)).be.eql(undefined);
      });
    });
    describe('(NaN)', () => {
      it('== NaN', () => {
        should(Function.id(NaN)).be.eql(NaN);
      });
    });
    describe('(Infinity)', () => {
      it('== Infinity', () => {
        should(Function.id(Infinity)).be.eql(Infinity);
      });
    });
  });
  describe('const_', () => {
    describe('(1, 2)', () => {
      it('== 1', () => {
        Function.const_(1, 2).should.be.eql(1);
      });
    });
    describe('(2, 1)', () => {
      it('== 2', () => {
        Function.const_(2, 1).should.be.eql(2);
      });
    });
    describe('(2)(1)', () => {
      it('== 2', () => {
        Function.const_(2)(1).should.be.eql(2);
      });
    });
  });
  describe('compose', function () {
    describe('(inc, add)(1,1)', function () {
      it('== 3', function () {
        Function.compose(inc, add)(1,1).should.be.eql(3);
      });
    });
    describe('(inc, inc, add)(1,1)', function () {
      it('== 4', function () {
        Function.compose(inc, inc, add)(1,1).should.be.eql(4);
      });
    });
    describe('(inc)(0)', function () {
      it('== 1', function () {
        Function.compose(inc)(0).should.be.eql(1);
      });
    });
    describe('(inc, inc)(0)', function () {
      it('== 2', function () {
        Function.compose(inc, inc)(0).should.be.eql(2);
      });
    });
    describe('(inc, inc, inc)(0)', function () {
      it('== 3', function () {
        Function.compose(inc, inc, inc)(0).should.be.eql(3);
      });
    });
  });
  describe('pipe', function () {
    describe('([add, inc])([1,1])', function () {
      it('== 3', function () {
        Function.pipe([add, inc])([1,1]).should.be.eql(3);
      });
    });
    describe('([add, inc, inc])([1,1])', function () {
      it('== 4', function () {
        Function.pipe([add, inc, inc])([1,1]).should.be.eql(4);
      });
    });
    describe('([inc])([0])', function () {
      it('== 1', function () {
        Function.pipe([inc])([0]).should.be.eql(1);
      });
    });
    describe('([inc, inc])([0])', function () {
      it('== 2', function () {
        Function.pipe([inc, inc])([0]).should.be.eql(2);
      });
    });
    describe('([inc, inc, inc])([0])', function () {
      it('== 3', function () {
        Function.pipe([inc, inc, inc])([0]).should.be.eql(3);
      });
    });
  });
  describe('comp', () => {
    describe('([inc, add])([1,1])', function () {
      it('== 3', function () {
        Function.comp([inc, add])([1,1]).should.be.eql(3);
      });
    });
    describe('([inc, inc, add])([1,1])', function () {
      it('== 4', function () {
        Function.comp([inc, inc, add])([1,1]).should.be.eql(4);
      });
    });
    describe('([inc], [0])', function () {
      it('== 1', function () {
        Function.comp([inc], [0]).should.be.eql(1);
      });
    });
    describe('([inc])([0])', function () {
      it('== 1', function () {
        Function.comp([inc])([0]).should.be.eql(1);
      });
    });
    describe('([inc, inc])([0])', function () {
      it('== 2', function () {
        Function.comp([inc, inc])([0]).should.be.eql(2);
      });
    });
    describe('([inc, inc, inc])([0])', function () {
      it('== 3', function () {
        Function.comp([inc, inc, inc])([0]).should.be.eql(3);
      });
    });
  });
  describe('flip', () => {
    describe('(const_, 1, 2)', () => {
      it('== 2', () => {
        Function.flip(Function.const_, 1, 2).should.be.eql(2);
      });
    });
    describe('(const_, 2, 1)', () => {
      it('== 1', () => {
        Function.flip(Function.const_, 2, 1).should.be.eql(1);
      });
    });
    describe('(const_)(2, 1)', () => {
      it('== 1', () => {
        Function.flip(Function.const_)(2, 1).should.be.eql(1);
      });
    });
    describe('(const_, 2)(1)', () => {
      it('== 1', () => {
        Function.flip(Function.const_, 2)(1).should.be.eql(1);
      });
    });
    describe('(const_)(2)(1)', () => {
      it('== 1', () => {
        Function.flip(Function.const_)(2)(1).should.be.eql(1);
      });
    });
  });
  describe('apply', () => {
    describe('(0, inc)', () => {
      it('== 1', () => {
        Function.apply(0, inc).should.be.eql(1);
      });
    });
    describe('(1, inc)', () => {
      it('== 2', () => {
        Function.apply(1, inc).should.be.eql(2);
      });
    });
    describe('(1)(inc)', () => {
      it('== 2', () => {
        Function.apply(1)(inc).should.be.eql(2);
      });
    });
  });
  xdescribe('fix', () => {
    describe('(const_(1))', () => {
      it('== 1', () => {
        Function.fix(Function.const_(1)).should.be.eql(1);
      });
    });
  });
  describe('on', () => {
    describe('(add, inc, 1, 2)', () => {
      it('== 5', () => {
        Function.on(add, inc, 1, 2).should.be.eql(5);
      });
    });
    describe('(mult, inc, 1, 2)', () => {
      it('== 6', () => {
        Function.on(mult, inc, 1, 2).should.be.eql(6);
      });
    });
    describe('(add, inc, 2, 4)', () => {
      it('== 8', () => {
        Function.on(add, inc, 2, 4).should.be.eql(8);
      });
    });
    describe('(mult, inc, 2, 4)', () => {
      it('== 6', () => {
        Function.on(mult, inc, 2, 4).should.be.eql(15);
      });
    });
    describe('(mult)(inc, 2, 4)', () => {
      it('== 6', () => {
        Function.on(mult)(inc, 2, 4).should.be.eql(15);
      });
    });
    describe('(mult, inc)(2, 4)', () => {
      it('== 6', () => {
        Function.on(mult, inc)(2, 4).should.be.eql(15);
      });
    });
    describe('(mult, inc, 2)(4)', () => {
      it('== 6', () => {
        Function.on(mult, inc, 2)(4).should.be.eql(15);
      });
    });
    describe('(mult)(inc)(2, 4)', () => {
      it('== 6', () => {
        Function.on(mult)(inc)(2, 4).should.be.eql(15);
      });
    });
    describe('(mult)(inc, 2)(4)', () => {
      it('== 6', () => {
        Function.on(mult)(inc, 2)(4).should.be.eql(15);
      });
    });
    describe('(mult, inc)(2)(4)', () => {
      it('== 6', () => {
        Function.on(mult, inc)(2)(4).should.be.eql(15);
      });
    });
    describe('(mult)(inc)(2)(4)', () => {
      it('== 6', () => {
        Function.on(mult)(inc)(2)(4).should.be.eql(15);
      });
    });
  });
});

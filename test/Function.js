import { Function } from '../src/Data';

xdescribe('Function.', () => {
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
        Function.id(null).be.eql(null);
      });
    });
    describe('(undefined)', () => {
      it('== undefined', () => {
        Function.id(undefined).be.eql(undefined);
      });
    });
    describe('(NaN)', () => {
      it('== NaN', () => {
        Function.id(NaN).be.eql(NaN);
      });
    });
    describe('(Infinity)', () => {
      it('== Infinity', () => {
        Function.id(Infinity).be.eql(Infinity);
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
  describe('comp', () => {

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
  describe('fix', () => {
    describe('(const_(1))', () => {
      it('== 1', () => {
        Function.fix(Function.const_(1)).should.be.eql(1);
      });
    });
  });
  describe('on', () => {
    describe('(mult, inc, 1, 1)', () => {
      it('== 4', () => {
        Function.on((a,b) => a*b, x => x+1, 1, 1).should.be.eql(4);
      });
    });
  });
});

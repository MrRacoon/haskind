import * as F from '../src/Function';

xdescribe('Function', () => {
  describe('id', () => {
    describe('(1)', () => {
      it('== 1', () => {
        F.id(1).should.be.eql(1);
      });
    });
    describe('(2.1)', () => {
      it('== 2.1', () => {
        F.id(2.1).should.be.eql(2.1);
      });
    });
    describe('("2")', () => {
      it('== 2', () => {
        F.id('2').should.be.eql('2');
      });
    });
    describe('(true)', () => {
      it('== true', () => {
        F.id(true).should.be.eql(true);
      });
    });
    describe('(null)', () => {
      it('== null', () => {
        F.id(null).be.eql(null);
      });
    });
    describe('(undefined)', () => {
      it('== undefined', () => {
        F.id(undefined).be.eql(undefined);
      });
    });
    describe('(NaN)', () => {
      it('== NaN', () => {
        F.id(NaN).be.eql(NaN);
      });
    });
    describe('(Infinity)', () => {
      it('== Infinity', () => {
        F.id(Infinity).be.eql(Infinity);
      });
    });
  });
  describe('const_', () => {
    describe('(1, 2)', () => {
      it('== 1', () => {
        F.const_(1, 2).should.be.eql(1);
      });
    });
    describe('(2, 1)', () => {
      it('== 2', () => {
        F.const_(2, 1).should.be.eql(2);
      });
    });
    describe('(2)(1)', () => {
      it('== 2', () => {
        F.const_(2)(1).should.be.eql(2);
      });
    });
  });
  describe('comp', () => {

  });
  describe('flip', () => {
    describe('(const_, 1, 2)', () => {
      it('== 2', () => {
        F.flip(F.const_, 1, 2).should.be.eql(2);
      });
    });
    describe('(const_, 2, 1)', () => {
      it('== 1', () => {
        F.flip(F.const_, 2, 1).should.be.eql(1);
      });
    });
    describe('(const_)(2, 1)', () => {
      it('== 1', () => {
        F.flip(F.const_)(2, 1).should.be.eql(1);
      });
    });
    describe('(const_, 2)(1)', () => {
      it('== 1', () => {
        F.flip(F.const_, 2)(1).should.be.eql(1);
      });
    });
    describe('(const_)(2)(1)', () => {
      it('== 1', () => {
        F.flip(F.const_)(2)(1).should.be.eql(1);
      });
    });
  });
  describe('fix', () => {
    describe('(const_(1))', () => {
      it('== 1', () => {
        F.fix(F.const_(1)).should.be.eql(1);
      });
    });
  });
  describe('on', () => {
    describe('(mult, inc, 1, 1)', () => {
      it('== 4', () => {
        F.on((a,b) => a*b, x => x+1, 1, 1).should.be.eql(4);
      });
    });
  });
});

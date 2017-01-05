import * as F from '../src/Function';

xdescribe('Function', () => {
  describe('id', () => {
    describe('("a")', () => {
      it('== "a"', () => {
        F.id('a').should.be.eql('a');
      });
    });
    describe('(3)', () => {
      it('== 3', () => {
        F.id(3).should.be.eql(3);
      });
    });
    describe('(true)', () => {
      it('== true', () => {
        F.id(true).should.be.eql(true);
      });
    });
    describe('(null)', () => {
      it('== null', () => {
        F.id(null).should.be.eql(null);
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

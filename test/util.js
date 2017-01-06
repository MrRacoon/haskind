import should from 'should';
import * as U from '../src/util';
import { fibs } from './helpers';

describe('util', () => {
  describe('id', () => {
    describe('(1)', () => {
      it('== 1', () => {
        U.id(1).should.be.eql(1);
      });
    });
    describe('(2.1)', () => {
      it('== 2', () => {
        U.id(2).should.be.eql(2);
      });
    });
    describe('("asdf")', () => {
      it('== "asdf"', () => {
        U.id('asdf').should.be.eql('asdf');
      });
    });
    describe('("2")', () => {
      it('== 2', () => {
        U.id('2').should.be.eql('2');
      });
    });
    describe('(true)', () => {
      it('== true', () => {
        U.id(true).should.be.eql(true);
      });
    });
    describe('(null)', () => {
      it('== null', () => {
        should(U.id(null)).be.eql(null);
      });
    });
    describe('(undefined)', () => {
      it('== undefined', () => {
        should(U.id(undefined)).be.eql(undefined);
      });
    });
    describe('(NaN)', () => {
      it('== NaN', () => {
        should(U.id(NaN)).be.eql(NaN);
      });
    });
    describe('(Infinity)', () => {
      it('== Infinity', () => {
        should(U.id(Infinity)).be.eql(Infinity);
      });
    });
  });
  describe('error', () => {
    describe('("Type.McTypeface")', () => {
      it('errors: haskind.Type.McTypeface', () => {
        (() => U.error('Type.McTypeface')).should.throw('haskind.Type.McTypeface');
      });
    });
    describe('("arb")', () => {
      it('error: haskind.arb', () => {
        (() => U.error('arb')).should.throw('haskind.arb');
      });
    });
  });
  describe('_curry', () => {
    describe('(add)(a,b)', () => {
      it('== 10', () => {
        U._curry((x,y)=>x+y)(3,7).should.be.eql(10);
      });
    });
    describe('(add)(a)(b)', () => {
      it('== 10', () => {
        U._curry((x,y)=>x+y)(3)(7).should.be.eql(10);
      });
    });
    describe('(map)(a,b)', () => {
      it('== [1,2,3]', () => {
        U._curry((f,ls)=>ls.map(f))(a=>a+1,[0,1,2]).should.be.eql([1,2,3]);
      });
    });
    describe('(map)(a)(b)', () => {
      it('== [1,2,3]', () => {
        U._curry((f,ls)=>ls.map(f))(a=>a+1)([0,1,2]).should.be.eql([1,2,3]);
      });
    });
    describe('(filter)(a,b)', () => {
      it('== [1,2]', () => {
        U._curry((p,ls)=>ls.filter(p))(a=>a,[0,1,2]).should.be.eql([1,2]);
      });
    });
    describe('(filter)(a)(b)', () => {
      it('== [1,2]', () => {
        U._curry((p,ls)=>ls.filter(p))(a=>a)([0,1,2]).should.be.eql([1,2]);
      });
    });
    describe('(reduce)(a,b,c)', () => {
      it('== 3', () => {
        U._curry((f,i,ls)=>ls.reduce(f,i))((a,b)=>a+b,0,[0,1,2]).should.be.eql(3);
      });
    });
    describe('(reduce)(a,b)(c)', () => {
      it('== 3', () => {
        U._curry((f,i,ls)=>ls.reduce(f,i))((a,b)=>a+b,0)([0,1,2]).should.be.eql(3);
      });
    });
    describe('(reduce)(a)(b,c)', () => {
      it('== 3', () => {
        U._curry((f,i,ls)=>ls.reduce(f,i))((a,b)=>a+b)(0,[0,1,2]).should.be.eql(3);
      });
    });
    describe('(reduce)(a)(b)(c)', () => {
      it('== 3', () => {
        U._curry((f,i,ls)=>ls.reduce(f,i))((a,b)=>a+b)(0)([0,1,2]).should.be.eql(3);
      });
    });
  });
  describe('True', () => {
    describe('()', () => {
      it('== true', () => {
        U.True().should.be.eql(true);
      });
    });
    describe('(true)', () => {
      it('== true', () => {
        U.True(true).should.be.eql(true);
      });
    });
    describe('("true")', () => {
      it('== true', () => {
        U.True('true').should.be.eql(true);
      });
    });
    describe('(1)', () => {
      it('== true', () => {
        U.True(1).should.be.eql(true);
      });
    });
  });
  describe('False', () => {
    describe('()', () => {
      it('== false', () => {
        U.False().should.be.eql(false);
      });
    });
    describe('(true)', () => {
      it('== false', () => {
        U.False(true).should.be.eql(false);
      });
    });
    describe('("true")', () => {
      it('== false', () => {
        U.False('true').should.be.eql(false);
      });
    });
    describe('(1)', () => {
      it('== false', () => {
        U.False(1).should.be.eql(false);
      });
    });
  });
  describe('cond', () => {
    describe('let fns = [[lt(0), constant(-1)], [eq(0), id], [gt(0), constant(1)]] in', () => {
      let fns;
      beforeEach(() => {
        const lt = x => y => x < y;
        const eq = x => y => x === y;
        const gt = x => y => x > y;
        fns = [
          [lt(0), U.constant(1)],
          [eq(0), U.id],
          [gt(0), U.constant(-1)]
        ];
      });
      describe('(fns)(-10)', () => {
        it('== -1', () => {
          U.cond(fns)(-10).should.be.eql(-1);
        });
      });
      describe('(fns)(0)', () => {
        it('== 0', () => {
          U.cond(fns)(0).should.be.eql(0);
        });
      });
      describe('(fns)(20)', () => {
        it('== 1', () => {
          U.cond(fns)(20).should.be.eql(1);
        });
      });
    });
    describe('let fns = []', () => {
      describe('(fns)(-10)', () => {
        it('== undefined', () => {
          should(U.cond([])(-10)).be.eql(undefined);
        });
      });
    });
  });
  describe('type', () => {
    describe('(null)', () => {
      it('== "null"', () => {
        U.type(null).should.be.eql('Null');
      });
    });
    describe('(undefined)', () => {
      it('== "undefined"', () => {
        U.type(undefined).should.be.eql('undefined');
      });
    });
    describe('(true)', () => {
      it('== "Boolean"', () => {
        U.type(true).should.be.eql('Boolean');
      });
    });
    describe('(false)', () => {
      it('== "Boolean"', () => {
        U.type(false).should.be.eql('Boolean');
      });
    });
    describe('(new Map())', () => {
      it('== "Map"', () => {
        U.type(new Map()).should.be.eql('Map');
      });
    });
    describe('(new Set())', () => {
      it('== "Set"', () => {
        U.type(new Set()).should.be.eql('Set');
      });
    });
    describe('(-100)', () => {
      it('== "Number"', () => {
        U.type(-100).should.be.eql('Number');
      });
    });
    describe('(0)', () => {
      it('== "Number"', () => {
        U.type(0).should.be.eql('Number');
      });
    });
    describe('(45)', () => {
      it('== "Number"', () => {
        U.type(45).should.be.eql('Number');
      });
    });
    describe('(45.9)', () => {
      it('== "Number"', () => {
        U.type(45.9).should.be.eql('Number');
      });
    });
    describe('(NaN)', () => {
      it('== "Number"', () => {
        U.type(NaN).should.be.eql('Number');
      });
    });
    describe('(-NaN)', () => {
      it('== "Number"', () => {
        U.type(-NaN).should.be.eql('Number');
      });
    });
    describe('(Infinity)', () => {
      it('== "Number"', () => {
        U.type(Infinity).should.be.eql('Number');
      });
    });
    describe('(-Infinity)', () => {
      it('== "Number"', () => {
        U.type(-Infinity).should.be.eql('Number');
      });
    });
    describe('("")', () => {
      it('== "String"', () => {
        U.type('').should.be.eql('String');
      });
    });
    describe('("4")', () => {
      it('== "String"', () => {
        U.type('4').should.be.eql('String');
      });
    });
    describe('("asdf")', () => {
      it('== "String"', () => {
        U.type('asdf').should.be.eql('String');
      });
    });
    describe('([])', () => {
      it('== "Array"', () => {
        U.type([]).should.be.eql('Array');
      });
    });
    describe('(["e", "r", "i", "k"])', () => {
      it('== "Array"', () => {
        U.type(['e', 'r', 'i', 'k']).should.be.eql('Array');
      });
    });
    describe('({})', () => {
      it('== "Object"', () => {
        U.type({}).should.be.eql('Object');
      });
    });
    describe('({ some: "obj" })', () => {
      it('== "Object"', () => {
        U.type({ some: 'obj' }).should.be.eql('Object');
      });
    });
    describe('(Nothing())', () => {
      it('== "Maybe"', () => {
        U.type({ nothing: null }).should.be.eql('Maybe');
      });
    });
    describe('(Just(2))', () => {
      it('== "Maybe"', () => {
        U.type({ just: 2 }).should.be.eql('Maybe');
      });
    });
    describe('(Left(2))', () => {
      it('== "Either"', () => {
        U.type({ left: 2 }).should.be.eql('Either');
      });
    });
    describe('(Right(2))', () => {
      it('== "Either"', () => {
        U.type({ right: 2 }).should.be.eql('Either');
      });
    });
    xdescribe('(fibs())', () => {
      it('== "GeneratorFn"', () => {
        U.type(fibs()).should.be.eql('GeneratorFn');
      });
    });
  });
});

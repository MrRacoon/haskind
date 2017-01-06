import { Data, util } from '.';

const { id } = util;
const { Maybe } = Data;
const { Just, Nothing } = Maybe;

describe('Maybe .', () => {
  describe('maybe', () => {
    describe('(1, id, Just(4))', () => {
      it('== 4', () => {
        Maybe.maybe(1, id, Just(4)).should.eql(4);
      });
    });
    describe('(1, id, Nothing())', () => {
      it('== 1', () => {
        Maybe.maybe(1, id, Nothing()).should.eql(1);
      });
    });
    describe('(1, inc, Just(4))', () => {
      it('== 5', () => {
        Maybe.maybe(1, x => x+1, Just(4)).should.eql(5);
      });
    });
    describe('(1, inc, Nothing())', () => {
      it('== 1', () => {
        Maybe.maybe(1, x => x+1, Nothing()).should.eql(1);
      });
    });
    describe('(1, inc)(Nothing())', () => {
      it('== 1', () => {
        Maybe.maybe(1, x => x+1)(Nothing()).should.eql(1);
      });
    });
    describe('(1)(inc, Nothing())', () => {
      it('== 1', () => {
        Maybe.maybe(1)(x => x+1, Nothing()).should.eql(1);
      });
    });
    describe('(1)(inc)(Nothing())', () => {
      it('== 1', () => {
        Maybe.maybe(1)(x => x+1)(Nothing()).should.eql(1);
      });
    });
  });
  describe('isJust', () => {
    describe('(Just(42))', () => {
      it('== true', () => {
        Maybe.isJust(Just(42)).should.be.eql(true);
      });
    });
    describe('(Nothing())', () => {
      it('== false', () => {
        Maybe.isJust(Nothing()).should.be.eql(false);
      });
    });
  });
  describe('isNothing', () => {
    describe('(Just(42))', () => {
      it('false', () => {
        Maybe.isNothing(Just(42)).should.be.eql(false);
      });
    });
    describe('(Nothing())', () => {
      it('== true', () => {
        Maybe.isNothing(Nothing()).should.be.eql(true);
      });
    });
  });
  describe('fromJust', () => {
    describe('(Just(42))', () => {
      it('== 42', () => {
        Maybe.fromJust(Just(42)).should.be.eql(42);
      });
    });
    describe('(Nothing())', () => {
      it('errors: haskind.Maybe.fromJust: Nothing', () => {
        (() => Maybe.fromJust(Nothing())).should.throw('haskind.Maybe.fromJust: Nothing');
      });
    });
  });
  describe('fromMaybe.ybe', () => {
    describe('(12, Just(42))', () => {
      it('== 42', () => {
        Maybe.fromMaybe(12, Just(42)).should.be.eql(42);
      });
    });
    describe('(12, Nothing())', () => {
      it('== 12', () => {
        Maybe.fromMaybe(12, Nothing()).should.be.eql(12);
      });
    });
    describe('(12)(Nothing())', () => {
      it('== 12', () => {
        Maybe.fromMaybe(12, Nothing()).should.be.eql(12);
      });
    });
  });
  describe('listToMaybe.ybe', () => {
    describe('([42])', () => {
      it('== Just(42)', () => {
        Maybe.listToMaybe([42]).should.be.eql(Just(42));
      });
    });
    describe('([])', () => {
      it('== Nothing()', () => {
        Maybe.listToMaybe([]).should.be.eql(Nothing());
      });
    });
  });
  describe('maybeToList', () => {
    describe('(Just(42))', () => {
      it('== [42]', () => {
        Maybe.maybeToList(Just(42)).should.be.eql([42]);
      });
    });
    describe('(Nothing())', () => {
      it('== []', () => {
        Maybe.maybeToList(Nothing()).should.be.eql([]);
      });
    });
  });
  describe('catMaybes', () => {
    describe('([Just(42), Nothing])', () => {
      it('== [42]', () => {
        Maybe.catMaybes([Just(42), Nothing()]).should.be.eql([42]);
      });
    });
  });
  describe('mapMaybe', () => {
    describe('(maybeEven, [1,2,3])', () => {
      it('== [2]', () => {
        const maybeEven = (x) => x % 2 === 0 ? Just(x) : Nothing();
        Maybe.mapMaybe(maybeEven, [1,2,3]).should.be.eql([2]);
      });
    });
    describe('(maybeEven)([1,2,3])', () => {
      it('== [2]', () => {
        const maybeEven = (x) => x % 2 === 0 ? Just(x) : Nothing();
        Maybe.mapMaybe(maybeEven)([1,2,3]).should.be.eql([2]);
      });
    });
  });
});

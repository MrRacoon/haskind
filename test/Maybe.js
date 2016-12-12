// import should from 'should'
import * as M from '../src/Maybe'
import { id } from '../src/util'
import { Maybe } from 'ramda-fantasy'


describe('Maybe', () => {
  describe('maybe', () => {
    it('(1, id, Maybe.Just(4))', () => {
      M.maybe(1, id, Maybe.Just(4)).should.eql(4)
    })
    it('(1, id, Maybe.Nothing())', () => {
      M.maybe(1, id, Maybe.Nothing()).should.eql(1)
    })
    it('(1, inc, Maybe.Just(4))', () => {
      M.maybe(1, x => x+1, Maybe.Just(4)).should.eql(5)
    })
    it('(1, inc, Maybe.Nothing())', () => {
      M.maybe(1, x => x+1, Maybe.Nothing()).should.eql(1)
    })
  })
})

// import should from 'should'
import * as M from '../src/Maybe'
import { id } from '../src/util'

const { Just, Nothing } = M

describe('Maybe', () => {
  describe('maybe', () => {
    it('(1, id, Just(4))', () => {
      M.maybe(1, id, Just(4)).should.eql(4)
    })
    it('(1, id, Nothing())', () => {
      M.maybe(1, id, Nothing()).should.eql(1)
    })
    it('(1, inc, Just(4))', () => {
      M.maybe(1, x => x+1, Just(4)).should.eql(5)
    })
    it('(1, inc, Nothing())', () => {
      M.maybe(1, x => x+1, Nothing()).should.eql(1)
    })
  })
})

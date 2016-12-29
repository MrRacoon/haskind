export const phonebook = new Map([['erik', 3], ['jack', 9]]);

export const classnames = new Set(['erik', 'jack']);

export function* fibs () {
  let next = 1;
  let acc = 1;
  let temp;
  while (true) { // eslint-disable-line
    yield next;
    temp = next + acc;
    next = acc;
    acc  = temp;
  }
}

describe('helpers', () => {
  describe('phonebook', () => {
    it('instanceof Map', () => {
      phonebook.should.be.instanceof(Map);
    });
  });
  describe('classnames', () => {
    it('instanceof Set', () => {
      classnames.should.be.instanceof(Set);
    });
  });
  describe('fibs', () => {
    describe('()', () => {
      let f = fibs();
      describe('.next()', () => {
        it('== 1', () => {
          f.next().value.should.be.eql(1);
        });
        describe('.next()', () => {
          it('== 1', () => {
            f.next().value.should.be.eql(1);
          });
          describe('.next()', () => {
            it('== 2', () => {
              f.next().value.should.be.eql(2);
            });
            describe('.next()', () => {
              it('== 3', () => {
                f.next().value.should.be.eql(3);
              });
              describe('.next()', () => {
                it('== 5', () => {
                  f.next().value.should.be.eql(5);
                });
                describe('.next()', () => {
                  it('== 8', () => {
                    f.next().value.should.be.eql(8);
                  });
                  describe('.next()', () => {
                    it('== 13', () => {
                      f.next().value.should.be.eql(13);
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

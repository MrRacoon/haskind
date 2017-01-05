import * as C from '../src/Char';

xdescribe('Char', () => {
  describe('Character Classification', () => {
    describe('isControl', () => {

    });
    describe('isSpace', () => {
      describe('(" ")', () => {
        it('== true', () => {
          C.isSpace(' ').should.be.eql(true);
        });
      });
      describe('("\\n")', () => {
        it('== true', () => {
          C.isSpace('\\n').should.be.eql(true);
        });
      });
      describe('("\\t")', () => {
        it('== true', () => {
          C.isSpace('\\t').should.be.eql(true);
        });
      });
      describe('("\\r")', () => {
        it('== true', () => {
          C.isSpace('\\r').should.be.eql(true);
        });
      });
      describe('("\\f")', () => {
        it('== true', () => {
          C.isSpace('\\f').should.be.eql(true);
        });
      });
      describe('("\\v")', () => {
        it('== true', () => {
          C.isSpace('\\v').should.be.eql(true);
        });
      });
      describe('("a")', () => {
        it('== false', () => {
          C.isSpace('a').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          C.isSpace('?').should.be.eql(false);
        });
      });
    });
    describe('isLower', () => {
      describe('("a")', () => {
        it('== true', () => {
          C.isLower('a').should.be.eql(true);
        });
      });
      describe('("A")', () => {
        it('== false', () => {
          C.isLower('A').should.be.eql(false);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          C.isLower(' ').should.be.eql(false);
        });
      });
      describe('("1")', () => {
        it('== false', () => {
          C.isLower('1').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          C.isLower('?').should.be.eql(false);
        });
      });
    });
    describe('isUpper', () => {
      describe('("a")', () => {
        it('== true', () => {
          C.isUpper('a').should.be.eql(false);
        });
      });
      describe('("A")', () => {
        it('== false', () => {
          C.isUpper('A').should.be.eql(true);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          C.isUpper(' ').should.be.eql(false);
        });
      });
      describe('("1")', () => {
        it('== false', () => {
          C.isUpper('1').should.be.eql(false);
        });
      });
    });
    describe('isAlpha', () => {
      describe('("a")', () => {
        it('== true', () => {
          C.isAlpha('a').should.be.eql(true);
        });
      });
      describe('("A")', () => {
        it('== true', () => {
          C.isAlpha('A').should.be.eql(true);
        });
      });
      describe('("1")', () => {
        it('== false', () => {
          C.isAlpha('1').should.be.eql(false);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          C.isAlpha(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          C.isAlpha('?').should.be.eql(false);
        });
      });
    });
    describe('isAlphaNum', () => {
      describe('("a")', () => {
        it('== true', () => {
          C.isAlphaNum('a').should.be.eql(true);
        });
      });
      describe('("A")', () => {
        it('== true', () => {
          C.isAlphaNum('A').should.be.eql(true);
        });
      });
      describe('("1")', () => {
        it('== true', () => {
          C.isAlphaNum('1').should.be.eql(true);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          C.isAlphaNum(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          C.isAlphaNum('?').should.be.eql(false);
        });
      });
    });
    describe('isPrint', () => {
      describe('("a")', () => {
        it('== true', () => {
          C.isPrint('a').should.be.eql(true);
        });
      });
      describe('("A")', () => {
        it('== true', () => {
          C.isPrint('A').should.be.eql(true);
        });
      });
      describe('("1")', () => {
        it('== true', () => {
          C.isPrint('1').should.be.eql(true);
        });
      });
      describe('(" ")', () => {
        it('== true', () => {
          C.isPrint(' ').should.be.eql(true);
        });
      });
      describe('("?")', () => {
        it('== true', () => {
          C.isPrint('?').should.be.eql(true);
        });
      });
    });
    describe('isDigit', () => {
      describe('("a")', () => {
        it('== false', () => {
          C.isDigit('a').should.be.eql(false);
        });
      });
      describe('("A")', () => {
        it('== false', () => {
          C.isDigit('A').should.be.eql(false);
        });
      });
      describe('("1")', () => {
        it('== true', () => {
          C.isDigit('1').should.be.eql(true);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          C.isDigit(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          C.isDigit('?').should.be.eql(false);
        });
      });
    });
    describe('isOctDigit', () => {
      describe('("a")', () => {
        it('== false', () => {
          C.isOctDigit('a').should.be.eql(false);
        });
      });
      describe('("A")', () => {
        it('== false', () => {
          C.isOctDigit('A').should.be.eql(false);
        });
      });
      describe('("1")', () => {
        it('== true', () => {
          C.isOctDigit('1').should.be.eql(true);
        });
      });
      describe('("7")', () => {
        it('== true', () => {
          C.isOctDigit('7').should.be.eql(true);
        });
      });
      describe('("8")', () => {
        it('== false', () => {
          C.isOctDigit('8').should.be.eql(false);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          C.isOctDigit(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          C.isOctDigit('?').should.be.eql(false);
        });
      });
    });
    describe('isHexDigit', () => {
      describe('("a")', () => {
        it('== true', () => {
          C.isHexDigit('a').should.be.eql(true);
        });
      });
      describe('("A")', () => {
        it('== true', () => {
          C.isHexDigit('A').should.be.eql(true);
        });
      });
      describe('("f")', () => {
        it('== true', () => {
          C.isHexDigit('f').should.be.eql(true);
        });
      });
      describe('("F")', () => {
        it('== true', () => {
          C.isHexDigit('F').should.be.eql(true);
        });
      });
      describe('("g")', () => {
        it('== false', () => {
          C.isHexDigit('g').should.be.eql(false);
        });
      });
      describe('("G")', () => {
        it('== false', () => {
          C.isHexDigit('G').should.be.eql(false);
        });
      });
      describe('("1")', () => {
        it('== true', () => {
          C.isHexDigit('1').should.be.eql(true);
        });
      });
      describe('("8")', () => {
        it('== true', () => {
          C.isHexDigit('8').should.be.eql(true);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          C.isHexDigit(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          C.isHexDigit('?').should.be.eql(false);
        });
      });
    });
    describe('isLetter', () => {
      describe('("a")', () => {
        it('== true', () => {
          C.isLetter('a').should.be.eql(true);
        });
      });
      describe('("A")', () => {
        it('== true', () => {
          C.isLetter('A').should.be.eql(true);
        });
      });
      describe('("1")', () => {
        it('== false', () => {
          C.isLetter('1').should.be.eql(false);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          C.isLetter(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          C.isLetter('?').should.be.eql(false);
        });
      });
    });
    describe('isMark', () => {

    });
    describe('isNumber', () => {

    });
    describe('isPunctuation', () => {
      describe('("a")', () => {
        it('== false', () => {
          C.isPunctuation('a').should.be.eql(false);
        });
      });
      describe('("A")', () => {
        it('== false', () => {
          C.isPunctuation('A').should.be.eql(false);
        });
      });
      describe('("1")', () => {
        it('== false', () => {
          C.isPunctuation('1').should.be.eql(false);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          C.isPunctuation(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== true', () => {
          C.isPunctuation('?').should.be.eql(true);
        });
      });
    });
    describe('isSymbol', () => {

    });
    describe('isSeperator', () => {

    });
    describe('Character Classification', () => {
      describe('isAscii', () => {

      });
      describe('isLatin1', () => {

      });
      describe('isAsciiUpper', () => {

      });
      describe('isAsciiLower', () => {

      });
    });
  });
  describe('Case Conversion', () => {
    describe('toUpper', () => {
      describe('("a")', () => {
        it('== "A"', () => {
          C.toUpper('a').should.be.eql('A');
        });
      });
      describe('("A")', () => {
        it('== "A"', () => {
          C.toUpper('A').should.be.eql('A');
        });
      });
      describe('("?")', () => {
        it('== "?"', () => {
          C.toUpper('?').should.be.eql('?');
        });
      });
      describe('(" ")', () => {
        it('== " "', () => {
          C.toUpper(' ').should.be.eql(' ');
        });
      });
    });
    describe('toLower', () => {
      describe('("a")', () => {
        it('== "a"', () => {
          C.toLower('a').should.be.eql('a');
        });
      });
      describe('("A")', () => {
        it('== "a"', () => {
          C.toLower('A').should.be.eql('a');
        });
      });
      describe('("?")', () => {
        it('== "?"', () => {
          C.toLower('?').should.be.eql('?');
        });
      });
      describe('(" ")', () => {
        it('== " "', () => {
          C.toLower(' ').should.be.eql(' ');
        });
      });
    });
    describe('toTitle', () => {

    });
  });
  describe('Single digit characters', () => {
    describe('digitToInt', () => {

    });
    describe('intToDigit', () => {

    });
  });
  describe('Numeric representations', () => {
    describe('ord', () => {
      describe('("a")', () => {
        it('== 97', () => {
          C.ord('a').should.be.eql(97);
        });
      });
      describe('("A")', () => {
        it('== 65', () => {
          C.ord('A').should.be.eql(65);
        });
      });
      describe('("1")', () => {
        it('== 49', () => {
          C.ord('1').should.be.eql(49);
        });
      });
    });
    describe('chr', () => {
      describe('(97)', () => {
        it('== "a"', () => {
          C.ord(97).should.be.eql('a');
        });
      });
      describe('(65)', () => {
        it('== "A"', () => {
          C.ord(65).should.be.eql('A');
        });
      });
      describe('(49)', () => {
        it('== "1"', () => {
          C.ord(49).should.be.eql('1');
        });
      });
    });
  });
  describe('String representations', () => {
    describe('showLitChar', () => {

    });
    describe('lexLitChar', () => {

    });
    describe('readLitChar', () => {

    });
  });
});

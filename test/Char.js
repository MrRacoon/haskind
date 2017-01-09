import { Data } from '.';
const { Char } = Data;

xdescribe('Char .', () => {
  describe('Character Classification', () => {
    describe('isControl', () => {

    });
    describe('isSpace', () => {
      describe('(" ")', () => {
        it('== true', () => {
          Char.isSpace(' ').should.be.eql(true);
        });
      });
      describe('("\\n")', () => {
        it('== true', () => {
          Char.isSpace('\\n').should.be.eql(true);
        });
      });
      describe('("\\t")', () => {
        it('== true', () => {
          Char.isSpace('\\t').should.be.eql(true);
        });
      });
      describe('("\\r")', () => {
        it('== true', () => {
          Char.isSpace('\\r').should.be.eql(true);
        });
      });
      describe('("\\f")', () => {
        it('== true', () => {
          Char.isSpace('\\f').should.be.eql(true);
        });
      });
      describe('("\\v")', () => {
        it('== true', () => {
          Char.isSpace('\\v').should.be.eql(true);
        });
      });
      describe('("a")', () => {
        it('== false', () => {
          Char.isSpace('a').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          Char.isSpace('?').should.be.eql(false);
        });
      });
    });
    describe('isLower', () => {
      describe('("a")', () => {
        it('== true', () => {
          Char.isLower('a').should.be.eql(true);
        });
      });
      describe('("A")', () => {
        it('== false', () => {
          Char.isLower('A').should.be.eql(false);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          Char.isLower(' ').should.be.eql(false);
        });
      });
      describe('("1")', () => {
        it('== false', () => {
          Char.isLower('1').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          Char.isLower('?').should.be.eql(false);
        });
      });
    });
    describe('isUpper', () => {
      describe('("a")', () => {
        it('== true', () => {
          Char.isUpper('a').should.be.eql(false);
        });
      });
      describe('("A")', () => {
        it('== false', () => {
          Char.isUpper('A').should.be.eql(true);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          Char.isUpper(' ').should.be.eql(false);
        });
      });
      describe('("1")', () => {
        it('== false', () => {
          Char.isUpper('1').should.be.eql(false);
        });
      });
    });
    describe('isAlpha', () => {
      describe('("a")', () => {
        it('== true', () => {
          Char.isAlpha('a').should.be.eql(true);
        });
      });
      describe('("A")', () => {
        it('== true', () => {
          Char.isAlpha('A').should.be.eql(true);
        });
      });
      describe('("1")', () => {
        it('== false', () => {
          Char.isAlpha('1').should.be.eql(false);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          Char.isAlpha(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          Char.isAlpha('?').should.be.eql(false);
        });
      });
    });
    describe('isAlphaNum', () => {
      describe('("a")', () => {
        it('== true', () => {
          Char.isAlphaNum('a').should.be.eql(true);
        });
      });
      describe('("A")', () => {
        it('== true', () => {
          Char.isAlphaNum('A').should.be.eql(true);
        });
      });
      describe('("1")', () => {
        it('== true', () => {
          Char.isAlphaNum('1').should.be.eql(true);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          Char.isAlphaNum(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          Char.isAlphaNum('?').should.be.eql(false);
        });
      });
    });
    describe('isPrint', () => {
      describe('("a")', () => {
        it('== true', () => {
          Char.isPrint('a').should.be.eql(true);
        });
      });
      describe('("A")', () => {
        it('== true', () => {
          Char.isPrint('A').should.be.eql(true);
        });
      });
      describe('("1")', () => {
        it('== true', () => {
          Char.isPrint('1').should.be.eql(true);
        });
      });
      describe('(" ")', () => {
        it('== true', () => {
          Char.isPrint(' ').should.be.eql(true);
        });
      });
      describe('("?")', () => {
        it('== true', () => {
          Char.isPrint('?').should.be.eql(true);
        });
      });
    });
    describe('isDigit', () => {
      describe('("a")', () => {
        it('== false', () => {
          Char.isDigit('a').should.be.eql(false);
        });
      });
      describe('("A")', () => {
        it('== false', () => {
          Char.isDigit('A').should.be.eql(false);
        });
      });
      describe('("1")', () => {
        it('== true', () => {
          Char.isDigit('1').should.be.eql(true);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          Char.isDigit(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          Char.isDigit('?').should.be.eql(false);
        });
      });
    });
    describe('isOctDigit', () => {
      describe('("a")', () => {
        it('== false', () => {
          Char.isOctDigit('a').should.be.eql(false);
        });
      });
      describe('("A")', () => {
        it('== false', () => {
          Char.isOctDigit('A').should.be.eql(false);
        });
      });
      describe('("1")', () => {
        it('== true', () => {
          Char.isOctDigit('1').should.be.eql(true);
        });
      });
      describe('("7")', () => {
        it('== true', () => {
          Char.isOctDigit('7').should.be.eql(true);
        });
      });
      describe('("8")', () => {
        it('== false', () => {
          Char.isOctDigit('8').should.be.eql(false);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          Char.isOctDigit(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          Char.isOctDigit('?').should.be.eql(false);
        });
      });
    });
    describe('isHexDigit', () => {
      describe('("a")', () => {
        it('== true', () => {
          Char.isHexDigit('a').should.be.eql(true);
        });
      });
      describe('("A")', () => {
        it('== true', () => {
          Char.isHexDigit('A').should.be.eql(true);
        });
      });
      describe('("f")', () => {
        it('== true', () => {
          Char.isHexDigit('f').should.be.eql(true);
        });
      });
      describe('("F")', () => {
        it('== true', () => {
          Char.isHexDigit('F').should.be.eql(true);
        });
      });
      describe('("g")', () => {
        it('== false', () => {
          Char.isHexDigit('g').should.be.eql(false);
        });
      });
      describe('("G")', () => {
        it('== false', () => {
          Char.isHexDigit('G').should.be.eql(false);
        });
      });
      describe('("1")', () => {
        it('== true', () => {
          Char.isHexDigit('1').should.be.eql(true);
        });
      });
      describe('("8")', () => {
        it('== true', () => {
          Char.isHexDigit('8').should.be.eql(true);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          Char.isHexDigit(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          Char.isHexDigit('?').should.be.eql(false);
        });
      });
    });
    describe('isLetter', () => {
      describe('("a")', () => {
        it('== true', () => {
          Char.isLetter('a').should.be.eql(true);
        });
      });
      describe('("A")', () => {
        it('== true', () => {
          Char.isLetter('A').should.be.eql(true);
        });
      });
      describe('("1")', () => {
        it('== false', () => {
          Char.isLetter('1').should.be.eql(false);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          Char.isLetter(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== false', () => {
          Char.isLetter('?').should.be.eql(false);
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
          Char.isPunctuation('a').should.be.eql(false);
        });
      });
      describe('("A")', () => {
        it('== false', () => {
          Char.isPunctuation('A').should.be.eql(false);
        });
      });
      describe('("1")', () => {
        it('== false', () => {
          Char.isPunctuation('1').should.be.eql(false);
        });
      });
      describe('(" ")', () => {
        it('== false', () => {
          Char.isPunctuation(' ').should.be.eql(false);
        });
      });
      describe('("?")', () => {
        it('== true', () => {
          Char.isPunctuation('?').should.be.eql(true);
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
          Char.toUpper('a').should.be.eql('A');
        });
      });
      describe('("A")', () => {
        it('== "A"', () => {
          Char.toUpper('A').should.be.eql('A');
        });
      });
      describe('("?")', () => {
        it('== "?"', () => {
          Char.toUpper('?').should.be.eql('?');
        });
      });
      describe('(" ")', () => {
        it('== " "', () => {
          Char.toUpper(' ').should.be.eql(' ');
        });
      });
    });
    describe('toLower', () => {
      describe('("a")', () => {
        it('== "a"', () => {
          Char.toLower('a').should.be.eql('a');
        });
      });
      describe('("A")', () => {
        it('== "a"', () => {
          Char.toLower('A').should.be.eql('a');
        });
      });
      describe('("?")', () => {
        it('== "?"', () => {
          Char.toLower('?').should.be.eql('?');
        });
      });
      describe('(" ")', () => {
        it('== " "', () => {
          Char.toLower(' ').should.be.eql(' ');
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
          Char.ord('a').should.be.eql(97);
        });
      });
      describe('("A")', () => {
        it('== 65', () => {
          Char.ord('A').should.be.eql(65);
        });
      });
      describe('("1")', () => {
        it('== 49', () => {
          Char.ord('1').should.be.eql(49);
        });
      });
    });
    describe('chr', () => {
      describe('(97)', () => {
        it('== "a"', () => {
          Char.ord(97).should.be.eql('a');
        });
      });
      describe('(65)', () => {
        it('== "A"', () => {
          Char.ord(65).should.be.eql('A');
        });
      });
      describe('(49)', () => {
        it('== "1"', () => {
          Char.ord(49).should.be.eql('1');
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

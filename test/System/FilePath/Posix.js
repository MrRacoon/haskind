import { System, Data } from '.';

const Posix = System.FilePath.Posix;
const { Just, Nothing } = Data.Maybe;

describe('System.FilePath.Posix', () => {
  // pathSeparator :: Char
  describe('pathSeparator', () => {
    it('== "/"', () => {
      Posix.pathSeparator.should.be.eql('/');
    });
  });
  // pathSeparators :: [Char]
  describe('pathSeparators', () => {
    it('== ["/"]', () => {
      Posix.pathSeparators.should.be.eql(['/']);
    });
  });
  // isPathSeparator :: Char -> Bool
  describe('isPathSeparator', () => {
    describe('("/")', () => {
      it('== true', () => {
        Posix.isPathSeparator('/').should.be.eql(true);
      });
    });
    describe('("a")', () => {
      it('== false', () => {
        Posix.isPathSeparator('a').should.be.eql(false);
      });
    });
    describe('(":")', () => {
      it('== false', () => {
        Posix.isPathSeparator(':').should.be.eql(false);
      });
    });
    describe('(1)', () => {
      it('== false', () => {
        Posix.isPathSeparator(1).should.be.eql(false);
      });
    });
  });
  // searchPathSeparator :: Char
  describe('searchPathSeparator', () => {
    it('== ":"', () => {
      Posix.searchPathSeparator.should.be.eql(':');
    });
  });
  // isSearchPathSeparator :: Char -> Bool
  describe('isSearchPathSeparator', () => {
    describe('("/")', () => {
      it('== false', () => {
        Posix.isSearchPathSeparator('/').should.be.eql(false);
      });
    });
    describe('("a")', () => {
      it('== false', () => {
        Posix.isSearchPathSeparator('a').should.be.eql(false);
      });
    });
    describe('(":")', () => {
      it('== true', () => {
        Posix.isSearchPathSeparator(':').should.be.eql(true);
      });
    });
    describe('(".")', () => {
      it('== false', () => {
        Posix.isSearchPathSeparator('.').should.be.eql(false);
      });
    });
  });
  // extSeparator :: Char
  describe('extSeparator', () => {
    it('== "."', () => {
      Posix.extSeparator.should.be.eql('.');
    });
  });
  // isExtSeparator :: Char -> Bool
  describe('isExtSeparator', () => {
    describe('("/")', () => {
      it('== false', () => {
        Posix.isExtSeparator('/').should.be.eql(false);
      });
    });
    describe('("a")', () => {
      it('== false', () => {
        Posix.isExtSeparator('a').should.be.eql(false);
      });
    });
    describe('(":")', () => {
      it('== false', () => {
        Posix.isExtSeparator(':').should.be.eql(false);
      });
    });
    describe('(".")', () => {
      it('== true', () => {
        Posix.isExtSeparator('.').should.be.eql(true);
      });
    });
  });
  // splitSearchPath :: String -> [FilePath]
  describe('splitSearchPath', () => {
    describe('("one")', () => {
      it('== ["one"]', () => {
        Posix.splitSearchPath('one')
          .should.be.eql(['one']);
      });
    });
    describe('("one:two")', () => {
      it('== ["one", "two"]', () => {
        Posix.splitSearchPath('one:two')
          .should.be.eql(['one', 'two']);
      });
    });
    describe('("one:two:three")', () => {
      it('== ["one", "two", "three"]', () => {
        Posix.splitSearchPath('one:two:three')
          .should.be.eql(['one', 'two', 'three']);
      });
    });
    describe('("one::two:three")', () => {
      it('== ["one", ".", "two", "three"]', () => {
        Posix.splitSearchPath('one::two:three')
          .should.be.eql(['one', '.', 'two', 'three']);
      });
    });
    describe('(":one:two:three")', () => {
      it('== [".", "one", "two", "three"]', () => {
        Posix.splitSearchPath(':one::two:three')
          .should.be.eql(['.', 'one', '.', 'two', 'three']);
      });
    });
    describe('(":one:two::three:")', () => {
      it('== [".", "one", "two", ".", "three", "."]', () => {
        Posix.splitSearchPath(':one:two::three:')
          .should.be.eql(['.', 'one', 'two', '.', 'three', '.']);
      });
    });
  });
  // getSearchPath :: IO [FilePath]
  describe('getSearchPath', () => {
    describe('()', () => {
      it('== "your:search:path"', () => {
        // Huh..... I don't know how to test this...
        // It returns an (IO [String]) and will be different for
        // everyone.
      });
    });
  });
  // splitExtension :: FilePath -> (String, String)
  describe('splitExtension', () => {
    describe('("file")', () => {
      it('== ["file", ""]', () => {
        Posix.splitExtension('file')
          .should.be.eql(['file', '']);
      });
    });
    describe('("file.ext")', () => {
      it('== ["file", ".ext"]', () => {
        Posix.splitExtension('file.ext')
          .should.be.eql(['file', '.ext']);
      });
    });
    describe('("dir/file.ext")', () => {
      it('== ["dir/file", ".ext"]', () => {
        Posix.splitExtension('dir/file.ext')
          .should.be.eql(['dir/file', '.ext']);
      });
    });
    describe('("dir/dir/file.ext")', () => {
      it('== ["dir/dir/file", ".ext"]', () => {
        Posix.splitExtension('dir/dir/file.ext')
          .should.be.eql(['dir/dir/file', '.ext']);
      });
    });
    describe('("dir/file.ext.other")', () => {
      it('== ["dir/file.ext", ".other"]', () => {
        Posix.splitExtension('dir/file.ext.other')
          .should.be.eql(['dir/file.ext', '.other']);
      });
    });
    describe('("dir/dir/file.ext.other")', () => {
      it('== ["dir/dir/file.ext", ".other"]', () => {
        Posix.splitExtension('dir/dir/file.ext.other')
          .should.be.eql(['dir/dir/file.ext', '.other']);
      });
    });
  });
  // takeExtension :: FilePath -> String
  describe('takeExtension', () => {
    describe('("")', () => {
      it('== ""', () => {
        Posix.takeExtension('')
          .should.be.eql('');
      });
    });
    describe('("file")', () => {
      it('== ""', () => {
        Posix.takeExtension('file')
          .should.be.eql('');
      });
    });
    describe('("file.ext")', () => {
      it('== ".ext"', () => {
        Posix.takeExtension('file.ext')
          .should.be.eql('.ext');
      });
    });
    describe('("dir/file.ext")', () => {
      it('== ".ext"', () => {
        Posix.takeExtension('dir/file.ext')
          .should.be.eql('.ext');
      });
    });
    describe('("dir/file.ext.other")', () => {
      it('== ".other"', () => {
        Posix.takeExtension('dir/file.ext.other')
          .should.be.eql('.other');
      });
    });
  });
  // replaceExtension :: FilePath -> String -> FilePath
  describe('replaceExtension', () => {
    describe('("file.ext", "")', () => {
      it('== "file"', () => {
        Posix.replaceExtension('file.ext', '')
          .should.be.eql('file');
      });
    });
    describe('("", "other")', () => {
      it('== ".other"', () => {
        Posix.replaceExtension('', 'other')
          .should.be.eql('.other');
      });
    });
    describe('("file", "other")', () => {
      it('== "file.other"', () => {
        Posix.replaceExtension('file', 'other')
          .should.be.eql('file.other');
      });
    });
    describe('("file.ext.ext", "other")', () => {
      it('== "file.ext.other"', () => {
        Posix.replaceExtension('file.ext.ext', 'other')
          .should.be.eql('file.ext.other');
      });
    });
    describe('("file.ext", "other")', () => {
      it('== "file.other"', () => {
        Posix.replaceExtension('file.ext', 'other')
          .should.be.eql('file.other');
      });
    });
    describe('("dir/file.ext", "other")', () => {
      it('== "dir/file.other"', () => {
        Posix.replaceExtension('dir/file.ext', 'other')
          .should.be.eql('dir/file.other');
      });
    });
    describe('("dir/file.ext")("other")', () => {
      it('== "dir/file.other"', () => {
        Posix.replaceExtension('dir/file.ext')('other')
          .should.be.eql('dir/file.other');
      });
    });
  });
  // (-<.>) :: FilePath -> String -> FilePath
  // dropExtension :: FilePath -> FilePath
  describe('dropExtension', () => {
    describe('("")', () => {
      it('== ""', () => {
        Posix.dropExtension('')
          .should.be.eql('');
      });
    });
    describe('("file")', () => {
      it('== "file"', () => {
        Posix.dropExtension('file')
          .should.be.eql('file');
      });
    });
    describe('("file.ext")', () => {
      it('== "file"', () => {
        Posix.dropExtension('file.ext')
          .should.be.eql('file');
      });
    });
    describe('("file.ext.other")', () => {
      it('== "file.ext"', () => {
        Posix.dropExtension('file.ext.other')
          .should.be.eql('file.ext');
      });
    });
    describe('("dir/file.ext")', () => {
      it('== "dir/file"', () => {
        Posix.dropExtension('dir/file.ext')
          .should.be.eql('dir/file');
      });
    });
    describe('("dir/file.ext.other")', () => {
      it('== "dir/file.ext"', () => {
        Posix.dropExtension('dir/file.ext.other')
          .should.be.eql('dir/file.ext');
      });
    });
  });
  // addExtension :: FilePath -> String -> FilePath
  describe('addExtension', () => {
    describe('("", "")', () => {
      it('== ""', () => {
        Posix.addExtension('', '')
          .should.be.eql('');
      });
    });
    describe('("file", "")', () => {
      it('== "file"', () => {
        Posix.addExtension('file', '')
          .should.be.eql('file');
      });
    });
    describe('("", "other")', () => {
      it('== ".other"', () => {
        Posix.addExtension('', 'other')
          .should.be.eql('.other');
      });
    });
    describe('("file", "other")', () => {
      it('== "file.other"', () => {
        Posix.addExtension('file', 'other')
          .should.be.eql('file.other');
      });
    });
    describe('("file.ext", "other")', () => {
      it('== "file.ext.other"', () => {
        Posix.addExtension('file.ext', 'other')
          .should.be.eql('file.ext.other');
      });
    });
    describe('("dir/file", "other")', () => {
      it('== "dir/file.other"', () => {
        Posix.addExtension('dir/file', 'other')
          .should.be.eql('dir/file.other');
      });
    });
    describe('("dir/file.ext", "other")', () => {
      it('== "dir/file.ext.other"', () => {
        Posix.addExtension('dir/file.ext', 'other')
          .should.be.eql('dir/file.ext.other');
      });
    });
    describe('("dir/file.ext")("other")', () => {
      it('== "dir/file.ext.other"', () => {
        Posix.addExtension('dir/file.ext')('other')
          .should.be.eql('dir/file.ext.other');
      });
    });
  });
  // hasExtension :: FilePath -> Bool
  describe('hasExtension', () => {
    describe('("")', () => {
      it('== false', () => {
        Posix.hasExtension('')
          .should.be.eql(false);
      });
    });
    describe('(".")', () => {
      it('== true', () => {
        Posix.hasExtension('.')
          .should.be.eql(true);
      });
    });
    describe('(".ext")', () => {
      it('== true', () => {
        Posix.hasExtension('.ext')
          .should.be.eql(true);
      });
    });
    describe('("file")', () => {
      it('== false', () => {
        Posix.hasExtension('file')
          .should.be.eql(false);
      });
    });
    describe('("dir/file.ext")', () => {
      it('== true', () => {
        Posix.hasExtension('dir/file.ext')
          .should.be.eql(true);
      });
    });
    describe('("dir/file")', () => {
      it('== false', () => {
        Posix.hasExtension('dir/file')
          .should.be.eql(false);
      });
    });
  });
  // (<.>) :: FilePath -> String -> FilePath
  // splitExtensions :: FilePath -> (FilePath, String)
  describe('splitExtensions', () => {
    describe('("")', () => {
      it('== ["", ""]', () => {
        Posix.splitExtensions('')
          .should.be.eql(['', '']);
      });
    });
    describe('("file")', () => {
      it('== ["file", ""]', () => {
        Posix.splitExtensions('file')
          .should.be.eql(['file', '']);
      });
    });
    describe('(".ext")', () => {
      it('== ["", ".ext"]', () => {
        Posix.splitExtensions('.ext')
          .should.be.eql(['', '.ext']);
      });
    });
    describe('("file.ext")', () => {
      it('== ["file", ".ext"]', () => {
        Posix.splitExtensions('file.ext')
          .should.be.eql(['file', '.ext']);
      });
    });
    describe('("dir/file")', () => {
      it('== ["dir/file", ""]', () => {
        Posix.splitExtensions('dir/file')
          .should.be.eql(['dir/file', '']);
      });
    });
    describe('("dir/file.ext")', () => {
      it('== ["dir/file", ".ext"]', () => {
        Posix.splitExtensions('dir/file.ext')
          .should.be.eql(['dir/file', '.ext']);
      });
    });
    describe('("dir/file.ext.other")', () => {
      it('== ["dir/file", ".ext.other"]', () => {
        Posix.splitExtensions('dir/file.ext.other')
          .should.be.eql(['dir/file', '.ext.other']);
      });
    });
  });
  // dropExtensions :: FilePath -> FilePath
  describe('dropExtensions', () => {
    describe('("")', () => {
      it('== ""', () => {
        Posix.dropExtensions('')
          .should.be.eql('');
      });
    });
    describe('("file")', () => {
      it('== "file"', () => {
        Posix.dropExtensions('file')
          .should.be.eql('file');
      });
    });
    describe('("./file")', () => {
      it('== "./file"', () => {
        Posix.dropExtensions('./file')
          .should.be.eql('./file');
      });
    });
    describe('(".ext")', () => {
      it('== ""', () => {
        Posix.dropExtensions('.ext')
          .should.be.eql('');
      });
    });
    describe('("file.ext")', () => {
      it('== "file"', () => {
        Posix.dropExtensions('file.ext')
          .should.be.eql('file');
      });
    });
    describe('("file.ext.ext")', () => {
      it('== "file"', () => {
        Posix.dropExtensions('file.ext.ext')
          .should.be.eql('file');
      });
    });
    describe('("dir/file.ext.ext")', () => {
      it('== "dir/file"', () => {
        Posix.dropExtensions('dir/file.ext.ext')
          .should.be.eql('dir/file');
      });
    });
  });
  // takeExtensions :: FilePath -> String
  describe('takeExtensions', () => {
    describe('("")', () => {
      it('== ""', () => {
        Posix.takeExtensions('')
          .should.be.eql('');
      });
    });
    describe('("file")', () => {
      it('== ""', () => {
        Posix.takeExtensions('file')
          .should.be.eql('');
      });
    });
    describe('("file.ext")', () => {
      it('== ".ext"', () => {
        Posix
          .takeExtensions('file.ext')
          .should.be.eql('.ext');
      });
    });
    describe('("file.ext.ext")', () => {
      it('== ".ext.ext"', () => {
        Posix
          .takeExtensions('file.ext.ext')
          .should.be.eql('.ext.ext');
      });
    });
    describe('("dir/file.ext.other")', () => {
      it('== ".ext.other"', () => {
        Posix.takeExtensions('dir/file.ext.other')
          .should.be.eql('.ext.other');
      });
    });
    describe('("dir/./file.ext.other")', () => {
      it('== ".ext.other"', () => {
        Posix.takeExtensions('dir/./file.ext.other')
          .should.be.eql('.ext.other');
      });
    });
  });
  // replaceExtensions :: FilePath -> String -> FilePath
  describe('replaceExtensions', () => {
    describe('("dir/file.ext.other", "words")', () => {
      it('== "dir/file.words"', () => {
        Posix.replaceExtensions('dir/file.ext.other', 'words')
          .should.be.eql('dir/file.words');
      });
    });
    describe('("dir/file.ext.other")("words")', () => {
      it('== "dir/file.words"', () => {
        Posix.replaceExtensions('dir/file.ext.other')('words')
          .should.be.eql('dir/file.words');
      });
    });
  });
  // stripExtension :: String -> FilePath -> Maybe FilePath
  describe('stripExtension', () => {
    describe('(".ext", "dir/file.ext")', () => {
      it('== Just("dir/file")', () => {
        Posix.stripExtension('.ext', 'dir/file.ext')
          .should.be.eql(Just('dir/file'));
      });
    });
    describe('(".none", "dir/file.ext")', () => {
      it('== Nothing()', () => {
        Posix.stripExtension('.none', 'dir/file.ext')
          .should.be.eql(Nothing());
      });
    });
    describe('(".ext")("dir/file.ext")', () => {
      it('== Just("dir/file")', () => {
        Posix.stripExtension('.ext', 'dir/file.ext')
          .should.be.eql(Just('dir/file'));
      });
    });
  });
  // splitFileName :: FilePath -> (String, String)
  describe('splitFileName', () => {
    describe('("")', () => {
      it('== ["./", ""]', () => {
        Posix.splitFileName('')
          .should.be.eql(['./', '']);
      });
    });
    describe('("file")', () => {
      it('== ["./", "file"]', () => {
        Posix.splitFileName('file')
          .should.be.eql(['./', 'file']);
      });
    });
    describe('("file.ext")', () => {
      it('== ["./", "file.ext"]', () => {
        Posix.splitFileName('file.ext')
          .should.be.eql(['./', 'file.ext']);
      });
    });
    describe('("dir/file.ext")', () => {
      it('== ["dir/", "file.ext"]', () => {
        Posix.splitFileName('dir/file.ext')
          .should.be.eql(['dir/', 'file.ext']);
      });
    });
    describe('("dir1/dir2/file.ext")', () => {
      it('== ["dir1/dir2/", "file.ext"]', () => {
        Posix.splitFileName('dir1/dir2/file.ext')
          .should.be.eql(['dir1/dir2/', 'file.ext']);
      });
    });
  });
  // takeFileName :: FilePath -> FilePath
  describe('takeFileName', () => {
    describe('("")', () => {
      it('== ""', () => {
        Posix.takeFileName('')
          .should.be.eql('');
      });
    });
    describe('("file")', () => {
      it('== "file"', () => {
        Posix.takeFileName('file')
          .should.be.eql('file');
      });
    });
    describe('("file.ext")', () => {
      it('== "file.ext"', () => {
        Posix.takeFileName('file.ext')
          .should.be.eql('file.ext');
      });
    });
    describe('("dir/file.ext")', () => {
      it('== "file.ext"', () => {
        Posix.takeFileName('dir/file.ext')
          .should.be.eql('file.ext');
      });
    });
    describe('("dir/dir/file.ext")', () => {
      it('== "file.ext"', () => {
        Posix.takeFileName('dir/dir/file.ext')
          .should.be.eql('file.ext');
      });
    });
  });
  // replaceFileName :: FilePath -> String -> FilePath
  describe('replaceFileName', () => {
    describe('("", "")', () => {
      it('== ""', () => {
        Posix.replaceFileName('', '')
          .should.be.eql('');
      });
    });
    describe('("file.ext", "")', () => {
      it('== ""', () => {
        Posix.replaceFileName('file.ext', '')
          .should.be.eql('');
      });
    });
    describe('("", "other")', () => {
      it('== "other"', () => {
        Posix.replaceFileName('', 'other')
          .should.be.eql('other');
      });
    });
    describe('("file.ext", "other")', () => {
      it('== "other"', () => {
        Posix.replaceFileName('file.ext', 'other')
          .should.be.eql('other');
      });
    });
    describe('("dir/file.ext", "other")', () => {
      it('== "dir/other"', () => {
        Posix.replaceFileName('dir/file.ext', 'other')
          .should.be.eql('dir/other');
      });
    });
    describe('("dir/", "other")', () => {
      it('== "dir/other"', () => {
        Posix.replaceFileName('dir/', 'other')
          .should.be.eql('dir/other');
      });
    });
    describe('("dir/dir/file.ext", "other")', () => {
      it('== "dir/other"', () => {
        Posix.replaceFileName('dir/dir/file.ext', 'other')
          .should.be.eql('dir/dir/other');
      });
    });
    describe('("dir/file.ext")("other")', () => {
      it('== "dir/other"', () => {
        Posix.replaceFileName('dir/file.ext')('other')
          .should.be.eql('dir/other');
      });
    });
  });
  // dropFileName :: FilePath -> FilePath
  describe('dropFileName', () => {
    describe('("")', () => {
      it('== "./"', () => {
        Posix.dropFileName('')
          .should.be.eql('./');
      });
    });
    describe('(".")', () => {
      it('== "./"', () => {
        Posix.dropFileName('.')
          .should.be.eql('./');
      });
    });
    describe('("file.ext")', () => {
      it('== "./"', () => {
        Posix.dropFileName('file.ext')
          .should.be.eql('./');
      });
    });
    describe('("dir/")', () => {
      it('== "dir/"', () => {
        Posix.dropFileName('dir/')
          .should.be.eql('dir/');
      });
    });
    describe('("dir/file.ext")', () => {
      it('== "dir/"', () => {
        Posix.dropFileName('dir/file.ext')
          .should.be.eql('dir/');
      });
    });
    describe('("dir/dir/file.ext")', () => {
      it('== "dir/dir/"', () => {
        Posix.dropFileName('dir/dir/file.ext')
          .should.be.eql('dir/dir/');
      });
    });
  });
  // takeBaseName :: FilePath -> String
  describe('takeBaseName', () => {
    describe('("")', () => {
      it('== ""', () => {
        Posix.takeBaseName('')
          .should.be.eql('');
      });
    });
    describe('("file")', () => {
      it('== "file"', () => {
        Posix.takeBaseName('file')
          .should.be.eql('file');
      });
    });
    describe('("file.ext")', () => {
      it('== "file"', () => {
        Posix.takeBaseName('file.ext')
          .should.be.eql('file');
      });
    });
    describe('("dir/file.ext")', () => {
      it('== "file"', () => {
        Posix.takeBaseName('dir/file.ext')
          .should.be.eql('file');
      });
    });
    describe('("dir/dir/file.ext")', () => {
      it('== "file"', () => {
        Posix.takeBaseName('dir/dir/file.ext')
          .should.be.eql('file');
      });
    });
    describe('("./dir/dir/file.ext")', () => {
      it('== "file"', () => {
        Posix.takeBaseName('./dir/dir/file.ext')
          .should.be.eql('file');
      });
    });
  });
  // replaceBaseName :: FilePath -> String -> FilePath
  describe('replaceBaseName', () => {
    describe('("", "")', () => {
      it('== ""', () => {
        Posix.replaceBaseName('', '')
          .should.be.eql('');
      });
    });
    describe('("", "other")', () => {
      it('== "other"', () => {
        Posix.replaceBaseName('', 'other')
          .should.be.eql('other');
      });
    });
    describe('("file", "")', () => {
      it('== ""', () => {
        Posix.replaceBaseName('', '')
          .should.be.eql('');
      });
    });
    describe('("file.ext", "")', () => {
      it('== ".ext"', () => {
        Posix.replaceBaseName('file.ext', '')
          .should.be.eql('.ext');
      });
    });
    describe('("file.ext", "other")', () => {
      it('== "other.ext"', () => {
        Posix.replaceBaseName('file.ext', 'other')
          .should.be.eql('other.ext');
      });
    });
    describe('("dir/file.ext", "other")', () => {
      it('== "dir/other.ext"', () => {
        Posix.replaceBaseName('dir/file.ext', 'other')
          .should.be.eql('dir/other.ext');
      });
    });
    describe('("./dir/file.ext", "other")', () => {
      it('== "./dir/other.ext"', () => {
        Posix.replaceBaseName('./dir/file.ext', 'other')
          .should.be.eql('./dir/other.ext');
      });
    });
    describe('("dir/dir/file.ext", "other")', () => {
      it('== "dir/dir/other.ext"', () => {
        Posix.replaceBaseName('dir/dir/file.ext', 'other')
          .should.be.eql('dir/dir/other.ext');
      });
    });
    describe('("dir/file.ext")("other")', () => {
      it('== "dir/other.ext"', () => {
        Posix.replaceBaseName('dir/file.ext')('other')
          .should.be.eql('dir/other.ext');
      });
    });
  });
  // takeDirectory :: FilePath -> FilePath
  describe('takeDirectory', () => {
    describe('("")', () => {
      it('== "."', () => {
        Posix.takeDirectory('')
          .should.be.eql('.');
      });
    });
    describe('(".")', () => {
      it('== "."', () => {
        Posix.takeDirectory('.')
          .should.be.eql('.');
      });
    });
    describe('("./")', () => {
      it('== "."', () => {
        Posix.takeDirectory('./')
          .should.be.eql('.');
      });
    });
    describe('("./file")', () => {
      it('== "."', () => {
        Posix.takeDirectory('./file')
          .should.be.eql('.');
      });
    });
    describe('("././file")', () => {
      it('== "./."', () => {
        Posix.takeDirectory('././file')
          .should.be.eql('./.');
      });
    });
    describe('("dir/file.ext")', () => {
      it('== "dir/"', () => {
        Posix.takeDirectory('dir/file.ext')
          .should.be.eql('dir');
      });
    });
  });
  // replaceDirectory :: FilePath -> String -> FilePath
  xdescribe('replaceDirectory', () => {
    describe('("", "")', () => {
      it('== ""', () => {
        Posix.replaceDirectory('', '')
          .should.be.eql('');
      });
    });
    describe('(".", "")', () => {
      it('== "."', () => {
        Posix.replaceDirectory('.', '')
          .should.be.eql('.');
      });
    });
    describe('("", ".")', () => {
      it('== "."', () => {
        Posix.replaceDirectory('', '.')
          .should.be.eql('.');
      });
    });
    describe('(".", ".")', () => {
      it('== "."', () => {
        Posix.replaceDirectory('.', '.')
          .should.be.eql('./.');
      });
    });
    describe('("./.", "dir")', () => {
      it('== "dir/."', () => {
        Posix.replaceDirectory('./.', 'dir')
          .should.be.eql('dir/.');
      });
    });
    describe('("dir/file.ext", "other")', () => {
      it('== "other/file.ext"', () => {
        Posix.replaceDirectory('dir/file.ext', 'other')
          .should.be.eql('other/file.ext');
      });
    });
    describe('("dir/file.ext")("other")', () => {
      it('== "other/file.ext"', () => {
        Posix.replaceDirectory('dir/file.ext')('other')
          .should.be.eql('other/file.ext');
      });
    });
  });
  // combine :: FilePath -> FilePath -> FilePath
  xdescribe('combine', () => {
    describe('("", "")', () => {
      it('== ""', () => {
        Posix.combine('', '')
          .should.be.eql('');
      });
    });
    describe('(".", "")', () => {
      it('== "."', () => {
        Posix.combine('.', '')
          .should.be.eql('.');
      });
    });
    describe('("", ".")', () => {
      it('== "."', () => {
        Posix.combine('', '.')
          .should.be.eql('.');
      });
    });
    describe('(".", ".")', () => {
      it('== "."', () => {
        Posix.combine('.', '.')
          .should.be.eql('./.');
      });
    });
    describe('("/etc", "network/interfaces")', () => {
      it('== "/etc/network/interfaces"', () => {
        Posix.combine('/etc', 'network/interfaces')
          .should.be.eql('/etc/network/interfaces');
      });
    });
    describe('("/etc")("network/interfaces")', () => {
      it('== "/etc/network/interfaces"', () => {
        Posix.combine('/etc')('network/interfaces')
          .should.be.eql('/etc/network/interfaces');
      });
    });
  });
  // (</>) :: FilePath -> FilePath -> FilePath
  // splitPath :: FilePath -> [FilePath]
  xdescribe('splitPath', () => {
    describe('("")', () => {
      it('== []', () => {
        Posix.splitPath('')
          .should.be.eql([]);
      });
    });
    describe('(".")', () => {
      it('== ["."]', () => {
        Posix.splitPath('.')
          .should.be.eql(['.']);
      });
    });
    describe('("file")', () => {
      it('== ["file"]', () => {
        Posix.splitPath('file')
          .should.be.eql(['file']);
      });
    });
    describe('("file.ext")', () => {
      it('== ["file.ext"]', () => {
        Posix.splitPath('file.ext')
          .should.be.eql(['file.ext']);
      });
    });
    describe('("./file.ext")', () => {
      it('== [".", "file.ext"]', () => {
        Posix.splitPath('./file.ext')
          .should.be.eql(['.', 'file.ext']);
      });
    });
    describe('("././file.ext")', () => {
      it('== [".", ".", "file.ext"]', () => {
        Posix.splitPath('././file.ext')
          .should.be.eql(['.', '.', 'file.ext']);
      });
    });
    describe('("/././file.ext")', () => {
      it('== ["/", ".", ".", "file.ext"]', () => {
        Posix.splitPath('/././file.ext')
          .should.be.eql(['/', '.', '.', 'file.ext']);
      });
    });
    describe('("/etc/network/interfaces")', () => {
      it('== ["/", "etc/", "network/", "interfaces"]', () => {
        Posix.splitPath('/etc/network/interfaces')
          .should.be.eql(['/', 'etc/', 'network/', 'interfaces']);
      });
    });
  });
  // joinPath :: [FilePath] -> FilePath
  xdescribe('joinPath', () => {
    describe('([])', () => {
      it('== ""', () => {
        Posix.joinPath([])
          .should.be.eql('');
      });
    });
    describe('(["."])', () => {
      it('== "."', () => {
        Posix.joinPath(['.'])
          .should.be.eql('.');
      });
    });
    describe('([".", "."])', () => {
      it('== "./."', () => {
        Posix.joinPath(['.', '.'])
          .should.be.eql('./.');
      });
    });
    describe('(["./.", ".."])', () => {
      it('== "././.."', () => {
        Posix.joinPath(['./.', '..'])
          .should.be.eql('././..');
      });
    });
    describe('(["./.", "/.."])', () => {
      it('== "/.."', () => {
        Posix.joinPath(['./.', '/..'])
          .should.be.eql('/..');
      });
    });
    describe('(["./.", "/..//", ".//"])', () => {
      it('== "/..//.//"', () => {
        Posix.joinPath(['./.', '/..//', './/'])
          .should.be.eql('/..//.//');
      });
    });
    describe('(["./.", "/...//", "/.//"])', () => {
      it('== "/.//"', () => {
        Posix.joinPath(['./.', '/..//', '/.//'])
          .should.be.eql('/.//');
      });
    });
    describe('(["/", "etc/", "network/", "interfaces"])', () => {
      it('== "/etc/network/interfaces"', () => {
        Posix.joinPath(['/', 'etc/', 'network/', 'interfaces'])
          .should.be.eql('/etc/network/interfaces');
      });
    });
  });
  // splitDirectories :: FilePath -> [FilePath]
  xdescribe('splitDirectories', () => {
    describe('("")', () => {
      it('== []', () => {
        Posix.splitDirectories('')
          .should.be.eql([]);
      });
    });
    describe('(".")', () => {
      it('== ["."]', () => {
        Posix.splitDirectories('.')
          .should.be.eql(['.']);
      });
    });
    describe('("./.")', () => {
      it('== [".", "."]', () => {
        Posix.splitDirectories('./.')
          .should.be.eql(['.', '.']);
      });
    });
    describe('("./..")', () => {
      it('== [".", ".."]', () => {
        Posix.splitDirectories('./..')
          .should.be.eql(['.', '..']);
      });
    });
    describe('("./../.")', () => {
      it('== [".", "..", "."]', () => {
        Posix.splitDirectories('./../.')
          .should.be.eql(['.', '..', '.']);
      });
    });
    describe('("./.././")', () => {
      it('== [".", "..", "."]', () => {
        Posix.splitDirectories('./.././')
          .should.be.eql(['.', '..', '.']);
      });
    });
    describe('("dir/dir/file.ext")', () => {
      it('== ["dir", "dir", "file.ext"]', () => {
        Posix.splitDirectories('dir/dir/file.ext')
          .should.be.eql(['dir', 'dir', 'file.ext']);
      });
    });
    describe('("/dir/dir/file.ext")', () => {
      it('== ["/", "dir", "dir", "file.ext"]', () => {
        Posix.splitDirectories('/dir/dir/file.ext')
          .should.be.eql(['/', 'dir', 'dir', 'file.ext']);
      });
    });
  });
  // splitDrive :: FilePath -> (FilePath, FilePath)
  xdescribe('splitDrive', () => {
    describe('("dir/file.ext")', () => {
      it('== ["", "dir/file.ext"]', () => {
        Posix.splitDrive('dir/file.ext')
          .should.be.eql(['', 'dir/file.ext']);
      });
    });
    describe('("/dir/file.ext")', () => {
      it('== ["/", "dir/file.ext"]', () => {
        Posix.splitDrive('/dir/file.ext')
          .should.be.eql(['/', 'dir/file.ext']);
      });
    });
  });
  // joinDrive :: FilePath -> FilePath -> FilePath
  xdescribe('joinDrive', () => {
    describe('("/", "dir/file.ext")', () => {
      it('== "/dir/file.ext"', () => {
        Posix.joinDrive('/', 'dir/file.ext')
          .should.be.eql('/dir/file.ext');
      });
    });
    describe('("/")("dir/file.ext")', () => {
      it('== "/dir/file.ext"', () => {
        Posix.joinDrive('/')('dir/file.ext')
          .should.be.eql('/dir/file.ext');
      });
    });
  });
  // takeDrive :: FilePath -> FilePath
  xdescribe('takeDrive', () => {
    describe('("/dir/file.ext")', () => {
      it('== "/"', () => {
        Posix.takeDrive('/dir/file.ext')
          .should.be.eql('/');
      });
    });
    describe('("dir/file.ext")', () => {
      it('== ""', () => {
        Posix.takeDrive('dir/file.ext')
          .should.be.eql('');
      });
    });
  });
  // hasDrive :: FilePath -> Bool
  xdescribe('hasDrive', () => {
    describe('("/dir/file.ext")', () => {
      it('== true', () => {
        Posix.hasDrive('/dir/file.ext')
          .should.be.eql(true);
      });
    });
    describe('("dir/file.ext")', () => {
      it('== false', () => {
        Posix.hasDrive('dir/file.ext')
          .should.be.eql(false);
      });
    });
  });
  // dropDrive :: FilePath -> FilePath
  xdescribe('dropDrive', () => {
    describe('"/dir/file.ext"', () => {
      it('== "dir/file.ext"', () => {
        Posix.dropDrive('/dir/file.ext')
          .should.be.eql('dir/file.ext');
      });
    });
  });
  // isDrive :: FilePath -> Bool
  xdescribe('isDrive', () => {
    describe('("/")', () => {
      it('== true', () => {
        Posix.isDrive('/')
          .should.be.eql(true);
      });
    });
    describe('("/dir/file.ext")', () => {
      it('== false', () => {
        Posix.isDrive('/dir/file.ext')
          .should.be.eql(false);
      });
    });
  });
  // hasTrailingPathSeparator :: FilePath -> Bool
  // addTrailingPathSeparator :: FilePath -> FilePath
  // dropTrailingPathSeparator :: FilePath -> FilePath
  // normalise :: FilePath -> FilePath
  // equalFilePath :: FilePath -> FilePath -> Bool
  // makeRelative :: FilePath -> FilePath -> FilePath
  xdescribe('makeRelative', () => {
    describe('("/home", "/home/dir/file.ext")', () => {
      it('== "dir/file.ext"', () => {
        Posix.makeRelative('/home', '/home/dir/file.ext')
          .should.be.eql('dir/file.ext');
      });
    });
    describe('("/home")("/home/dir/file.ext")', () => {
      it('== "dir/file.ext"', () => {
        Posix.makeRelative('/home')('/home/dir/file.ext')
          .should.be.eql('dir/file.ext');
      });
    });
  });
  // isRelative :: FilePath -> Bool
  xdescribe('isRelative', () => {
    describe('("../dir/file.ext")', () => {
      it('== true', () => {
        Posix.isRelative('../dir/file.ext')
          .shoule.be.eql(true);
      });
    });
    describe('("./dir/file.ext")', () => {
      it('== true', () => {
        Posix.isRelative('./dir/file.ext')
          .shoule.be.eql(true);
      });
    });
    describe('("/dir/file.ext")', () => {
      it('== false', () => {
        Posix.isRelative('/dir/file.ext')
          .shoule.be.eql(false);
      });
    });
    describe('("dir/file.ext")', () => {
      it('== true', () => {
        Posix.isRelative('dir/file.ext')
          .shoule.be.eql(true);
      });
    });
  });
  // isAbsolute :: FilePath -> Bool
  xdescribe('isAbsolute', () => {
    describe('("../dir/file.ext")', () => {
      it('== false', () => {
        Posix.isAbsolute('../dir/file.ext')
          .shoule.be.eql(false);
      });
    });
    describe('("./dir/file.ext")', () => {
      it('== false', () => {
        Posix.isAbsolute('./dir/file.ext')
          .shoule.be.eql(false);
      });
    });
    describe('("/dir/file.ext")', () => {
      it('== true', () => {
        Posix.isAbsolute('/dir/file.ext')
          .shoule.be.eql(true);
      });
    });
    describe('("dir/file.ext")', () => {
      it('== false', () => {
        Posix.isAbsolute('dir/file.ext')
          .shoule.be.eql(false);
      });
    });
  });
  // isValid :: FilePath -> Bool
  xdescribe('isValid', () => { });
  // makeValid :: FilePath -> FilePath
  xdescribe('makeValid', () => { });
});

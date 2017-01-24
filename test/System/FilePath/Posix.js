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
  xdescribe('searchPathSeparator', () => {
    it('== ":"', () => {
      Posix.searchPathSeparator.should.be.eql(':');
    });
  });
  // isSearchPathSeparator :: Char -> Bool
  xdescribe('isSearchPathSeparator', () => {
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
  xdescribe('extSeparator', () => {
    it('== "."', () => {
      Posix.extSeparator.should.be.eql('.');
    });
  });
  // isExtSeparator :: Char -> Bool
  xdescribe('isExtSeparator', () => {
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
  xdescribe('splitSearchPath', () => {
    describe('("one:two:three")', () => {
      it('== ["one", "two", "three"]', () => {
        Posix.splitSearchPath('one:two:three')
          .should.be.eql(['one', 'two', 'three']);
      });
    });
  });
  // getSearchPath :: IO [FilePath]
  xdescribe('getSearchPath', () => {
    describe('()', () => {
      it('== "your:search:path"', () => {
        // Huh..... I don't know how to test this...
      });
    });
  });
  // splitExtension :: FilePath -> (String, String)
  xdescribe('splitExtension', () => {
    describe('("dir/file.ext")', () => {
      it('== ["dir/file", "ext"]', () => {
        Posix.splitExtension('dir/file.ext')
          .should.be.eql(['dir/file', 'ext']);
      });
    });
  });
  // takeExtension :: FilePath -> String
  xdescribe('takeExtension', () => {
    describe('("dir/file.ext")', () => {
      it('== ".ext"', () => {
        Posix.takeExtension('dir/file.ext')
          .should.be.eql('.ext');
      });
    });
  });
  // replaceExtension :: FilePath -> String -> FilePath
  xdescribe('replaceExtension', () => {
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
  xdescribe('dropExtension', () => {
    describe('("dir/file.ext")', () => {
      it('== "dir/file"', () => {
        Posix.dropExtension('dir/file.ext')
          .should.be.eql('dir/file');
      });
    });
  });
  // addExtension :: FilePath -> String -> FilePath
  xdescribe('addExtension', () => {
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
  xdescribe('hasExtension', () => {
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
  xdescribe('splitExtensions', () => {
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
  xdescribe('dropExtensions', () => {
    describe('("dir/file.ext.other")', () => {
      it('== "dir/file"', () => {
        Posix.dropExtensions('dir/file.ext.other')
          .should.be.eql('dir/file');
      });
    });
  });
  // takeExtensions :: FilePath -> String
  xdescribe('takeExtensions', () => {
    describe('("dir/file.ext.other")', () => {
      it('== ".ext.other"', () => {
        Posix.takeExtensions('dir/file.ext.other')
          .should.be.eql('.ext.other');
      });
    });
  });
  // replaceExtensions :: FilePath -> String -> FilePath
  xdescribe('replaceExtensions', () => {
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
  xdescribe('stripExtension', () => {
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
  xdescribe('splitFileName', () => {
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
  xdescribe('takeFileName', () => {
    describe('("dir/file.ext")', () => {
      it('== "file.ext"', () => {
        Posix.takeFileName('dir/file.ext')
          .should.be.eql('file.ext');
      });
    });
  });
  // replaceFileName :: FilePath -> String -> FilePath
  xdescribe('replaceFileName', () => {
    describe('("dir/file.ext", "other")', () => {
      it('== "dir/other"', () => {
        Posix.replaceFileName('dir/file.ext', 'other')
          .should.be.eql('dir/other');
      });
    });
  });
  // dropFileName :: FilePath -> FilePath
  xdescribe('dropFileName', () => {
    describe('("dir/file.ext")', () => {
      it('== "dir/"', () => {
        Posix.dropFileName('dir/file.ext')
          .should.be.eql('dir/');
      });
    });
  });
  // takeBaseName :: FilePath -> String
  xdescribe('takeBaseName', () => {
    describe('("dir/file.ext")', () => {
      it('== "file"', () => {
        Posix.takeBaseName('dir/file.ext')
          .should.be.eql('file');
      });
    });
  });
  // replaceBaseName :: FilePath -> String -> FilePath
  xdescribe('replaceBaseName', () => {
    describe('("dir/file.ext", "other")', () => {
      it('== "dir/other.ext"', () => {
        Posix.replaceBaseName('dir/file.ext')
          .should.be.eql('dir/other.ext');
      });
    });
  });
  // takeDirectory :: FilePath -> FilePath
  xdescribe('takeDirectory', () => {
    describe('("dir/file.ext")', () => {
      it('== "dir/"', () => {
        Posix.takeDirectory('dir/file.ext')
          .should.be.eql('dir');
      });
    });
  });
  // replaceDirectory :: FilePath -> String -> FilePath
  xdescribe('replaceDirectory', () => {
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
    describe('("/etc/network/interfaces")', () => {
      it('== ["/", "etc/", "network/", "interfaces"]', () => {
        Posix.splitPath('/etc/network/interfaces')
          .should.be.eql(['/', 'etc/', 'network/', 'interfaces']);
      });
    });
  });
  // joinPath :: [FilePath] -> FilePath
  xdescribe('joinPath', () => {
    describe('(["/", "etc/", "network/", "interfaces"])', () => {
      it('== "/etc/network/interfaces"', () => {
        Posix.joinPath(['/', 'etc/', 'network/', 'interfaces'])
          .should.be.eql('/etc/network/interfaces');
      });
    });
  });
  // splitDirectories :: FilePath -> [FilePath]
  xdescribe('splitDirectories', () => {
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
  // joinDrive :: FilePath -> FilePath -> FilePath
  // takeDrive :: FilePath -> FilePath
  // hasDrive :: FilePath -> Bool
  // dropDrive :: FilePath -> FilePath
  // isDrive :: FilePath -> Bool
  // hasTrailingPathSeparator :: FilePath -> Bool
  // addTrailingPathSeparator :: FilePath -> FilePath
  // dropTrailingPathSeparator :: FilePath -> FilePath
  // normalise :: FilePath -> FilePath
  // equalFilePath :: FilePath -> FilePath -> Bool
  // makeRelative :: FilePath -> FilePath -> FilePath
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
  // makeValid :: FilePath -> FilePath
});

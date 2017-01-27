// pathSeparator :: Char
export const pathSeparator = '/';

// pathSeparators :: [Char]
export const pathSeparators = ['/'];

// isPathSeparator :: Char -> Bool
export function isPathSeparator (c) {
  return pathSeparators.indexOf(c) > -1;
}

// searchPathSeparator :: Char
export const searchPathSeparator = ':';

// isSearchPathSeparator :: Char -> Bool
export function isSearchPathSeparator (c) {
  return c === searchPathSeparator;
}

// extSeparator :: Char
export const extSeparator = '.';

// isExtSeparator :: Char -> Bool
export function isExtSeparator (c) {
  return c === extSeparator;
}

// splitSearchPath :: String -> [FilePath]
export function splitSearchPath(str) {
  return str.split(searchPathSeparator).map(x => x === '' ? '.' : x);
}
// getSearchPath :: IO [FilePath]
// splitExtension :: FilePath -> (String, String)
export function splitExtension(p) {
  const path = p.split('');
  const len = path.length;
  for (let i = len; i >= 0; i-=1) {
    if (isExtSeparator(path[i])) {
      return [path.slice(0, i).join(''), path.slice(i, len).join('')];
    }
  }
  return path;
}

// takeExtension :: FilePath -> String
export function takeExtension(p) {
  const path = p.split('');
  const len = path.length;
  for (let i = len; i >= 0; i-=1) {
    if (isExtSeparator(path[i])) {
      return path.slice(i, len).join('');
    }
  }
  return path;
}

// replaceExtension :: FilePath -> String -> FilePath
// (-<.>) :: FilePath -> String -> FilePath
// dropExtension :: FilePath -> FilePath
// addExtension :: FilePath -> String -> FilePath
// hasExtension :: FilePath -> Bool
// (<.>) :: FilePath -> String -> FilePath
// splitExtensions :: FilePath -> (FilePath, String)
// dropExtensions :: FilePath -> FilePath
// takeExtensions :: FilePath -> String
// replaceExtensions :: FilePath -> String -> FilePath
// stripExtension :: String -> FilePath -> Maybe FilePath
// splitFileName :: FilePath -> (String, String)
// takeFileName :: FilePath -> FilePath
// replaceFileName :: FilePath -> String -> FilePath
// dropFileName :: FilePath -> FilePath
// takeBaseName :: FilePath -> String
// replaceBaseName :: FilePath -> String -> FilePath
// takeDirectory :: FilePath -> FilePath
// replaceDirectory :: FilePath -> String -> FilePath
// combine :: FilePath -> FilePath -> FilePath
// (</>) :: FilePath -> FilePath -> FilePath
// splitPath :: FilePath -> [FilePath]
// joinPath :: [FilePath] -> FilePath
// splitDirectories :: FilePath -> [FilePath]
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
// isAbsolute :: FilePath -> Bool
// isValid :: FilePath -> Bool
// makeValid :: FilePath -> FilePath

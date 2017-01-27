import { _curry } from '../../util';
import { Maybe } from '../../Data';

const { Just, Nothing } = Maybe;

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
export const replaceExtension = _curry(
  function replaceExtension(fp, s) {
    return fp.replace(/[^.][\w]*$/, s);
  }
);

// (-<.>) :: FilePath -> String -> FilePath
// dropExtension :: FilePath -> FilePath
export function dropExtension(p) {
  const path = p.split('');
  const len = path.length;
  for (let i = len; i >= 0; i-=1) {
    if (isExtSeparator(path[i])) {
      return path.slice(0, i).join('');
    }
  }
  return path;
}

// addExtension :: FilePath -> String -> FilePath
export const addExtension = _curry(
  function addExtension(fp, s) {
    return `${fp}${extSeparator}${s}`;
  }
);

// hasExtension :: FilePath -> Bool
export const hasExtension =
  (fp) =>
    fp.indexOf(extSeparator) > -1;

// (<.>) :: FilePath -> String -> FilePath
// splitExtensions :: FilePath -> (FilePath, String)
export const splitExtensions = (fp) => {
  const [x, ...xs] = fp.split(extSeparator);
  return [x, `.${xs.join(extSeparator)}`];
};

// dropExtensions :: FilePath -> FilePath
export const dropExtensions = (fp) => {
  const [x,] = fp.split(extSeparator);
  return x;
};

// takeExtensions :: FilePath -> String
export const takeExtensions = (fp) => {
  const [,...xs] = fp.split(extSeparator);
  return `.${xs.join(extSeparator)}`;
};

// replaceExtensions :: FilePath -> String -> FilePath
export const replaceExtensions = _curry(
  function replaceExtensions(fp, s) {
    const [x,] = fp.split(extSeparator);
    return `${x}.${s}`;
  }
);

// stripExtension :: String -> FilePath -> Maybe FilePath
export const stripExtension = _curry(
  function stripExtension(s, fp) {
    const idx = fp.indexOf(s);
    return idx === -1 ? Nothing() : Just(fp.slice(0,idx));
  }
);

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

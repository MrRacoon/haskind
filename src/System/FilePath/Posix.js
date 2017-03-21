import { _curry } from '../../util';
import { Maybe } from '../../Data';

const { Just, Nothing } = Maybe;

const _split = (fp) => {
  if (!fp) return [[], '', []];
  let dirs = [];
  const dirSep = fp.lastIndexOf('/');
  if (dirSep > -1) dirs = fp.slice(0, dirSep).split('/');
  const filename = fp.slice(dirSep + 1);
  const [f, ...es] = filename.split(extSeparator);
  return [dirs, f, es];
};

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
  return [p, ''];
}

// takeExtension :: FilePath -> String
export function takeExtension(fp) {
  const [,,exts] = _split(fp);
  const len = exts.length;
  return len ? extSeparator + exts.reverse()[0] : '';
}

// replaceExtension :: FilePath -> String -> FilePath
export const replaceExtension = _curry(
  function replaceExtension(fp, s) {
    const lastExtSep = fp.lastIndexOf(extSeparator);
    if (lastExtSep === -1) return `${fp}.${s}`;
    if (!s) return fp.slice(0, lastExtSep);
    return `${fp.slice(0, lastExtSep)}.${s}`;
  }
);

// (-<.>) :: FilePath -> String -> FilePath
// dropExtension :: FilePath -> FilePath
export function dropExtension(p) {
  if (!p) return '';
  const lastExtSep = p.lastIndexOf(extSeparator);
  if (lastExtSep === -1) return p;
  return p.slice(0, lastExtSep);
}

// addExtension :: FilePath -> String -> FilePath
export const addExtension = _curry(
  function addExtension(fp, s) {
    if (!s) return fp;
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
  const [dirs, file, exts] = _split(fp);
  return [dirs.concat(file).join('/'), exts.length ? ('.' + exts.join('.')) : exts.join('.')];
};

// dropExtensions :: FilePath -> FilePath
export const dropExtensions = (fp) => {
  const [dirs, file,] = _split(fp);
  return dirs.concat([file]).join('/');
};

// takeExtensions :: FilePath -> String
export const takeExtensions = (fp) => {
  const [,, exts] = _split(fp);
  return exts.length ? `.${exts.join('.')}` : '';
};

// replaceExtensions :: FilePath -> String -> FilePath
export const replaceExtensions = _curry(
  function replaceExtensions(fp, s) {
    const [dirs, file] = _split(fp);
    return dirs.concat([file]).join('/').concat('.' + s);
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
export const splitFileName = (fp) => {
  const [...xs] = fp.split('/');
  const len = xs.length;
  return [`${len === 1 ? '.' : ''}${xs.slice(0, len-1).join('/')}/`, xs.reverse()[0]];
};

// takeFileName :: FilePath -> FilePath
export const takeFileName = (fp) => {
  const paths = fp.split('/');
  const len = paths.length;
  return paths[len-1];
};

// replaceFileName :: FilePath -> String -> FilePath
export const replaceFileName = _curry(
  function replaceFileName(fp, s) {
    const paths = fp.split('/');
    const len = paths.length;
    return `${len > 1 ? `${paths.slice(0, len-1).join('/')}/` : ''}${s}`;
  }
);

// dropFileName :: FilePath -> FilePath
export const dropFileName = (fp) => {
  const paths = fp.split('/');
  const len = paths.length;
  return `${len === 1 ? '.' : ''}${paths.slice(0, len-1).join('/')}/`;
};

// takeBaseName :: FilePath -> String
export const takeBaseName = (fp) => {
  return _split(fp)[1];
};

// replaceBaseName :: FilePath -> String -> FilePath
export const replaceBaseName = _curry(
  function (fp, s) {
    const [dirs,, exts] = _split(fp);
    return dirs.concat(
      [s].concat(exts).join(extSeparator)
    ).join(pathSeparator);
  }
);

// takeDirectory :: FilePath -> FilePath
export const takeDirectory = (fp) => {
  const [dirs] = _split(fp);
  return (dirs.length ? dirs : ['.'])
    .join(pathSeparator);
};

// replaceDirectory :: FilePath -> String -> FilePath
export const replaceDirectory = undefined;

// combine :: FilePath -> FilePath -> FilePath
export const combine = undefined;

// (</>) :: FilePath -> FilePath -> FilePath
// export const  = undefined;

// splitPath :: FilePath -> [FilePath]
export const splitPath = undefined;

// joinPath :: [FilePath] -> FilePath
export const joinPath = undefined;

// splitDirectories :: FilePath -> [FilePath]
export const splitDirectories = undefined;

// splitDrive :: FilePath -> (FilePath, FilePath)
export const splitDrive = undefined;

// joinDrive :: FilePath -> FilePath -> FilePath
export const joinDrive = undefined;

// takeDrive :: FilePath -> FilePath
export const takeDrive = undefined;

// hasDrive :: FilePath -> Bool
export const hasDrive = undefined;

// dropDrive :: FilePath -> FilePath
export const dropDrive = undefined;

// isDrive :: FilePath -> Bool
export const isDrive = undefined;

// hasTrailingPathSeparator :: FilePath -> Bool
export const hasTrailingPathSeparator = undefined;

// addTrailingPathSeparator :: FilePath -> FilePath
export const addTrailingPathSeparator = undefined;

// dropTrailingPathSeparator :: FilePath -> FilePath
export const dropTrailingPathSeparator = undefined;

// normalise :: FilePath -> FilePath
export const normalise = undefined;

// equalFilePath :: FilePath -> FilePath -> Bool
export const equalFilePath = undefined;

// makeRelative :: FilePath -> FilePath -> FilePath
export const makeRelative = undefined;

// isRelative :: FilePath -> Bool
export const isRelative = undefined;

// isAbsolute :: FilePath -> Bool
export const isAbsolute = undefined;

// isValid :: FilePath -> Bool
export const isValid = undefined;

// makeValid :: FilePath -> FilePath
export const makeValid = undefined;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapMaybe = exports.catMaybes = exports.maybeToList = exports.listToMaybe = exports.fromMaybe = exports.fromJust = exports.isNothing = exports.isJust = exports.maybe = exports.Nothing = exports.Just = exports._Nothing = exports._Just = exports.Maybe = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _hasInstance = require('babel-runtime/core-js/symbol/has-instance');

var _hasInstance2 = _interopRequireDefault(_hasInstance);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Maybe = exports.Maybe = function () {
  function Maybe(input) {
    return _Just(input) || _Nothing(input);
  }

  ;
  (0, _defineProperty2.default)(Maybe, _hasInstance2.default, {
    value: function value(input) {
      return Maybe(input);
    }
  });
  return Maybe;
}();

var _Just = exports._Just = function () {
  function _Just(input) {
    return input != null;
  }

  ;
  (0, _defineProperty2.default)(_Just, _hasInstance2.default, {
    value: function value(input) {
      return _Just(input);
    }
  });
  return _Just;
}();

var _Nothing = exports._Nothing = function () {
  function _Nothing(input) {
    return input != null && input.nothing == null;
  }

  ;
  (0, _defineProperty2.default)(_Nothing, _hasInstance2.default, {
    value: function value(input) {
      return _Nothing(input);
    }
  });
  return _Nothing;
}();

// Just :: * -> *


var Just = exports.Just = (0, _util.newKind)('just');

// Nothing :: () -> *

if (!_Just(Just)) {
  throw new TypeError('Value of variable "Just" violates contract.\n\nExpected:\n_Just\n\nGot:\n' + _inspect(Just));
}

var Nothing = exports.Nothing = (0, _util.emptyKind)('nothing');

if (!_Nothing(Nothing)) {
  throw new TypeError('Value of variable "Nothing" violates contract.\n\nExpected:\n_Nothing\n\nGot:\n' + _inspect(Nothing));
}

var maybe = exports.maybe = (0, _util._curry)(function (def, fn, m) {
  if (!(typeof fn === 'function')) {
    throw new TypeError('Value of argument "fn" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(fn));
  }

  if (!Maybe(m)) {
    throw new TypeError('Value of argument "m" violates contract.\n\nExpected:\nMaybe\n\nGot:\n' + _inspect(m));
  }

  if (isNothing(m)) return def;
  if (isJust(m)) return fn(m.just);
  return (0, _util.error)('Maybe.maybe: third argument should have type maybe');
});

// isJust :: Maybe a -> Bool
var isJust = exports.isJust = function isJust(m) {
  if (!Maybe(m)) {
    throw new TypeError('Value of argument "m" violates contract.\n\nExpected:\nMaybe\n\nGot:\n' + _inspect(m));
  }

  return (0, _util.type)(m) === 'Maybe' && (0, _util.type)(m.just) !== 'undefined';
};

// isNothing :: Maybe a -> Bool
var isNothing = exports.isNothing = function isNothing(m) {
  if (!Maybe(m)) {
    throw new TypeError('Value of argument "m" violates contract.\n\nExpected:\nMaybe\n\nGot:\n' + _inspect(m));
  }

  return (0, _util.type)(m) === 'Maybe' && (0, _util.type)(m.nothing) !== 'undefined';
};

// fromJust :: Maybe a -> a
var fromJust = exports.fromJust = function fromJust(m) {
  function _ref4(_id4) {
    if (!_Just(_id4)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\n_Just\n\nGot:\n' + _inspect(_id4));
    }

    return _id4;
  }

  if (!Maybe(m)) {
    throw new TypeError('Value of argument "m" violates contract.\n\nExpected:\nMaybe\n\nGot:\n' + _inspect(m));
  }

  return _ref4(isJust(m) ? m.just : (0, _util.error)('Maybe.fromJust: Nothing'));
};

// fromMaybe :: a -> Maybe a -> a
var fromMaybe = exports.fromMaybe = function fromMaybe(def, m) {
  if (!Maybe(m)) {
    throw new TypeError('Value of argument "m" violates contract.\n\nExpected:\nMaybe\n\nGot:\n' + _inspect(m));
  }

  return isJust(m) ? m.just : def;
};

// listToMaybe :: [a] -> Maybe a
var listToMaybe = exports.listToMaybe = function listToMaybe(ls) {
  function _ref6(_id6) {
    if (!Maybe(_id6)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nMaybe\n\nGot:\n' + _inspect(_id6));
    }

    return _id6;
  }

  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref6(ls.length ? Just(ls[0]) : Nothing());
};

// maybeToList :: Maybe a -> [a]
var maybeToList = exports.maybeToList = function maybeToList(m) {
  function _ref7(_id7) {
    if (!Array.isArray(_id7)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(_id7));
    }

    return _id7;
  }

  if (!Maybe(m)) {
    throw new TypeError('Value of argument "m" violates contract.\n\nExpected:\nMaybe\n\nGot:\n' + _inspect(m));
  }

  return _ref7(isJust(m) ? [fromJust(m)] : []);
};

// catMaybes :: [Maybe a] -> [a]
var catMaybes = exports.catMaybes = function catMaybes(ls) {
  function _ref8(_id8) {
    if (!Array.isArray(_id8)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(_id8));
    }

    return _id8;
  }

  if (!(Array.isArray(ls) && ls.every(function (item) {
    return Maybe(item);
  }))) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nMaybe[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref8(ls.filter(isJust).map(fromJust));
};

// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
var mapMaybe = exports.mapMaybe = (0, _util._curry)(function (fn, ls) {
  function _ref9(_id9) {
    if (!Array.isArray(_id9)) {
      throw new TypeError('Function return value violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(_id9));
    }

    return _id9;
  }

  if (!(typeof fn === 'function')) {
    throw new TypeError('Value of argument "fn" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(fn));
  }

  if (!Array.isArray(ls)) {
    throw new TypeError('Value of argument "ls" violates contract.\n\nExpected:\nany[]\n\nGot:\n' + _inspect(ls));
  }

  return _ref9(catMaybes(ls.map(fn)));
});

if (!(typeof mapMaybe === 'function')) {
  throw new TypeError('Value of variable "mapMaybe" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(mapMaybe));
}

function _inspect(input, depth) {
  var maxDepth = 4;
  var maxKeys = 15;

  if (depth === undefined) {
    depth = 0;
  }

  depth += 1;

  if (input === null) {
    return 'null';
  } else if (input === undefined) {
    return 'void';
  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
  } else if (Array.isArray(input)) {
    if (input.length > 0) {
      var _ret = function () {
        if (depth > maxDepth) return {
            v: '[...]'
          };

        var first = _inspect(input[0], depth);

        if (input.every(function (item) {
          return _inspect(item, depth) === first;
        })) {
          return {
            v: first.trim() + '[]'
          };
        } else {
          return {
            v: '[' + input.slice(0, maxKeys).map(function (item) {
              return _inspect(item, depth);
            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
          };
        }
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
    } else {
      return 'Array';
    }
  } else {
    var keys = (0, _keys2.default)(input);

    if (!keys.length) {
      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
        return input.constructor.name;
      } else {
        return 'Object';
      }
    }

    if (depth > maxDepth) return '{...}';
    var indent = '  '.repeat(depth - 1);
    var entries = keys.slice(0, maxKeys).map(function (key) {
      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
    }).join('\n  ' + indent);

    if (keys.length >= maxKeys) {
      entries += '\n  ' + indent + '...';
    }

    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
    } else {
      return '{\n  ' + indent + entries + '\n' + indent + '}';
    }
  }
}
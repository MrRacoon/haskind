
import { _curry, newKind } from './util';

export const Left  = newKind('left');
export const Right = newKind('right');

// either :: (a -> c) -> (b -> c) -> Either a b -> c
export const either = _curry((lfn, rfn, ethr) => {
  if (isLeft(ethr)) {
    return lfn(ethr.left);
  }
  if (isRight(ethr)) {
    return lfn(ethr.right);
  }
});

export const fromLeft = l => l.left;
export const fromRight = r => r.right;

// lefts :: [Either a b] -> [a]
export const lefts = (es) =>
  es.filter(isLeft).map(fromLeft);

// rights :: [Either a b] -> [b]
export const rights = (es) =>
  es.filter(isRight).map(fromRight);

// isLeft :: Either a b -> Bool
export const isLeft = (l) =>
  typeof l === 'object' && typeof l.left !== 'undefined';

// isRight :: Either a b -> Bool
export const isRight = r =>
  typeof r === 'object' && typeof r.right !== 'undefined';

// partitionEithers :: [Either a b] -> ([a], [b])
export const partitionEithers = (es) =>
  [lefts(es), rights(es)];

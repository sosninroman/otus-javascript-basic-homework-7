export function arithmeticSequenceSum(from, to) {
  if (typeof from !== 'number' || typeof to !== 'number') {
    throw new Error('Invalid input types');
  }
  if (!Number.isInteger(from) || !Number.isInteger(to)) {
    throw new Error('Arguments must be integer values');
  }
  if (from > to) {
    throw new Error('Invalid input range');
  }
  return ((from + to) * (to - from + 1)) / 2;
}

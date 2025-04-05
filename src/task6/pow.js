export function pow(a, x) {
  if (typeof a !== 'number' || typeof x !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  if (!Number.isInteger(x)) {
    throw new Error("This function doesn't support float power");
  }
  if (a === 0) {
    if (x <= 0) {
      throw new Error('Invalid input');
    }
    return 0;
  }
  let result = 1;
  let p = x;
  while (p != 0) {
    result = p > 0 ? result * a : result / a;
    if (p > 0) {
      --p;
    } else {
      ++p;
    }
  }
  return result;
}

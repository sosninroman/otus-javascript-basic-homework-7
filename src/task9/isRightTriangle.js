export function isRightTriangle(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw Error('Invalid arguments');
  }

  if (
    typeof a !== 'number' ||
    a <= 0 ||
    typeof b !== 'number' ||
    b <= 0 ||
    typeof c !== 'number' ||
    c <= 0
  ) {
    return false;
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  const [min, mid, max] = [a, b, c].sort((x, y) => x - y);
  return Math.abs(min ** 2 + mid ** 2 - max ** 2) < 0.001;
}

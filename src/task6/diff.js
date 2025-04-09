export function diff(lhs, rhs) {
  if (typeof lhs !== 'number' || typeof rhs !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return Math.abs(lhs - rhs);
}

export function printMaxNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw 'Error: invalid arguments';
  }
  console.log(Math.max(a, b));
}

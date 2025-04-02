export function printSumAndMul(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw 'Error: invalid arguments!';
  }
  console.log(a + b, a * b);
}

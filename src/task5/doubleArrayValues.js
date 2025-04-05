export function doubleArrayValues(arr) {
  if ((!arr) instanceof Array) {
    throw new Error('Input must be an instance of Array');
  }
  return arr.map((v) => {
    if (typeof v !== 'number') {
      throw new Error('All values in array must be numbers');
    }
    return 2 * v;
  });
}

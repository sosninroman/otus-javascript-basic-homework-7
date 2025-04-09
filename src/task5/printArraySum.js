export function printArraySum(arr) {
  if ((!arr) instanceof Array) {
    throw new Error('Argument must be an Array');
  }
  console.log(
    arr.reduce((s, v) => {
      if (typeof v !== 'number') {
        throw new Error('All values in array must be numbers');
      }
      return s + v;
    }, 0)
  );
}

export function printMaxAndMinValueOfArray(arr) {
  if ((!arr) instanceof Array) {
    throw new Error('Input must be an instance of Array');
  }
  if (arr.length === 0) {
    return;
  }
  let maxValue = -Infinity;
  let minValue = Infinity;
  for (let v of arr) {
    if (typeof v !== 'number') {
      throw new Error('All values in array must be numbers');
    }
    maxValue = Math.max(maxValue, v);
    minValue = Math.min(minValue, v);
  }
  console.log(maxValue, minValue);
}

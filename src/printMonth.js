export function printMonth() {
  const num = prompt('Enter month number');
  if (typeof num !== 'number' || num > 12 || num < 1) {
    throw 'Error: invalid month number';
  }
  const months = new Map([
    [1, 'January'],
    [2, 'February'],
    [3, 'March'],
    [4, 'April'],
    [5, 'May'],
    [6, 'June'],
    [7, 'July'],
    [8, 'August'],
    [9, 'September'],
    [10, 'October'],
    [11, 'November'],
    [12, 'December'],
  ]);
  console.log(months.get(num));
}

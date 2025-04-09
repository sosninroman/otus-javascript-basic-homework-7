export function getNumberAndPrintInternalSum() {
  let num = prompt('Enter the number: ');
  if (typeof num !== 'number' || num >= 1000 || num < 100) {
    throw new Error('invalid input');
  }
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  console.log(sum);
}

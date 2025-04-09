export function printOddAverage() {
  const n = parseInt(prompt('Enter a number:'));

  if (!Number.isInteger(n)) {
    throw new Error('invalid input value');
  }

  if (n <= 0) {
    console.log(0);
    return;
  }

  let sum = 0;
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
      count++;
    }
  }

  const average = sum / count;
  console.log(average);
}

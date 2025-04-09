export function printCircleInfo(radius) {
  if (typeof radius !== 'number') {
    throw Error('Invalid argument type');
  }
  console.log(2 * Math.PI * radius, Math.PI * Math.pow(radius, 2));
}

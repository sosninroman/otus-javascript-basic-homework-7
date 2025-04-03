export function isCircleInscribed(squareArea, circleArea) {
  if (typeof squareArea !== 'number' || typeof circleArea !== 'number') {
    throw 'Error: invalid input type';
  }
  if (squareArea < 0 || circleArea < 0) {
    throw 'Error: invalid input value';
  }
  const squareSide = Math.sqrt(squareArea);
  const circleRadius = Math.sqrt(circleArea / Math.PI);
  return 2 * circleRadius <= squareSide;
}

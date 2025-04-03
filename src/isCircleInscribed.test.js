import { isCircleInscribed } from './isCircleInscribed';

describe('Function isCircleInscribed', () => {
  test('returns true for boundary case', () => {
    expect(isCircleInscribed(100, 25 * Math.PI)).toBeTruthy();
  });
  test('returns true id curcle radius less than square side', () => {
    expect(isCircleInscribed(100, 16 * Math.PI)).toBeTruthy();
  });
  test('returns false if circle radius more than square side', () => {
    expect(isCircleInscribed(100, 30 * Math.PI)).toBeFalsy();
  });
  test('works with floats well', () => {
    expect(isCircleInscribed(20.25, 5.0625 * Math.PI)).toBeTruthy();
  });
  test('throws error for invalid inputs', () => {
    expect(() => {
      isCircleInscribed(-1, -5);
    }).toThrow();
    expect(() => {
      isCircleInscribed('-1', '-5');
    }).toThrow();
  });
});

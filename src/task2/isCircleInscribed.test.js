import { isCircleInscribed } from './isCircleInscribed';

describe('Function isCircleInscribed', () => {
  test('граничный случай', () => {
    expect(isCircleInscribed(100, 25 * Math.PI)).toBeTruthy();
  });
  test('радиус круга меньше, чем корень стороны', () => {
    expect(isCircleInscribed(100, 16 * Math.PI)).toBeTruthy();
  });
  test('радиус круга больше, чем корень стороны', () => {
    expect(isCircleInscribed(100, 30 * Math.PI)).toBeFalsy();
  });
  test('работает корректно с float аргументами', () => {
    expect(isCircleInscribed(20.25, 5.0625 * Math.PI)).toBeTruthy();
  });
  test('выбрасывает ошибку для некорректных входных данных', () => {
    expect(() => {
      isCircleInscribed(-1, -5);
    }).toThrow();
    expect(() => {
      isCircleInscribed('-1', '-5');
    }).toThrow();
  });
});

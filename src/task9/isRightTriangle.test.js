import { isRightTriangle } from './isRightTriangle';

describe('isRightTriangle', () => {
  test('Возвращает true, если стороны образуют прямоугольный треугольник', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
    expect(isRightTriangle(3, 3, 3)).toBe(false);
  });

  test('Возвращает false, если из переданных на вход длин не составить треугольник', () => {
    expect(isRightTriangle(3, 4, 0)).toBe(false);
    console.log(isRightTriangle(3, 3, 3));
  });

  test('Выбрасывает ошибку, если агрументы не являются числами', () => {
    expect(() => {
      isRightTriangle('one', 2, 3);
    }).toThrow();
  });
});

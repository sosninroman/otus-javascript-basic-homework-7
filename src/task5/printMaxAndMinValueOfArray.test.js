import { printMaxAndMinValueOfArray } from './printMaxAndMinValueOfArray';

describe('Function printMaxAndMinValueOfArray', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('выводит в консоль максимальное и минимальное значения в массиве', () => {
    printMaxAndMinValueOfArray([3, 2, 7, 5, 80, 1]);
    expect(console.log).toHaveBeenCalledWith(80, 1);
  });

  test('не вызывает console.log, если на вход получен пустой массив', () => {
    printMaxAndMinValueOfArray([]);
    expect(console.log).not.toHaveBeenCalled();
  });

  test('выбрасывает ошибку, если на вход подается не Array', () => {
    expect(() => {
      printMaxAndMinValueOfArray({});
    }).toThrow();
  });

  test('выбрасывает ошибку, если среди входных данные есть нечисловые значения', () => {
    expect(() => {
      printMaxAndMinValueOfArray([1, 'two', 3]);
    }).toThrow();
  });
});

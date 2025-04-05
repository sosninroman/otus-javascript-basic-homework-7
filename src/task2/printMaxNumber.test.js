import { printMaxNumber } from './printMaxNumber';

describe('Function printMaxNumber', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('выводит в консоль максимальное значние среди переданных аргументов', () => {
    printMaxNumber(1, 5);
    expect(console.log).toHaveBeenCalledWith(5);
  });

  test('выбрасывает ошибку для невалидных входных данных', () => {
    expect(() => {
      printMaxNumber();
    }).toThrow();
    expect(() => {
      printMaxNumber(1, 'two');
    }).toThrow();
    expect(() => {
      printMaxNumber('one', 2);
    }).toThrow();
    expect(() => {
      printMaxNumber('one', 'two');
    }).toThrow();
  });

  test('учитывает только первые два переданных аргумента', () => {
    printMaxNumber(1, 2, 3);
    expect(console.log).toHaveBeenCalledWith(2);
  });
});

import { printSumAndMul } from './printSumAndMul.js';

describe('Function printSumAndMul', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('Выводит в консоль суииу и произведение аргументов', () => {
    printSumAndMul(1, 2);
    expect(console.log).toHaveBeenCalledWith(3, 2);
    expect(1 + 2).toEqual(3);
  });

  test('Выбрасывает ошибку при вызове без аргументов', () => {
    expect(() => {
      printSumAndMul();
    }).toThrow();
    expect(() => {
      printSumAndMul(1);
    }).toThrow();
    expect(() => {
      printSumAndMul(null, 1);
    }).toThrow();
  });

  test('Выбрасывает ошибку, если аргументы не являются числами', () => {
    expect(() => {
      printSumAndMul('one', 'two');
    }).toThrow();
    expect(() => {
      printSumAndMul(1, 'two');
    }).toThrow();
    expect(() => {
      printSumAndMul('one', 2);
    }).toThrow();
  });
});

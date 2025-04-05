import { printArraySum } from './printArraySum';

describe('Function printArraySum', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('выводит в консоль 10 для [1,2,3,4]', () => {
    printArraySum([1, 2, 3, 4]);
    expect(console.log).toHaveBeenCalledWith(10);
  });

  test('выбрасывает ошибку, если на вход подается не массив', () => {
    expect(() => {
      printArraySum('aaa');
    }).toThrow();
  });

  test('выбрасывает ошибку, если во входном массиве находятся нечисловые значения', () => {
    expect(() => {
      printArraySum([1, 'two', 3]);
    }).toThrow();
  });
});

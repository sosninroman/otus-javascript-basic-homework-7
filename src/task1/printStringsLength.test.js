import { printStringsLength } from './printStringsLength.js';

describe('Function printStringsLength', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('Запрашивает у пользователя две строки и выводит суммарное количество символов в этих строках', () => {
    printStringsLength('Hello', 'world');
    expect(console.log).toHaveBeenCalledWith(10);
  });

  test('Выбрасывает ошибку при недопустимом вводе', () => {
    expect(() => {
      printStringsLength();
    }).toThrow();
    expect(() => {
      printStringsLength(1, 'world');
    }).toThrow();
    expect(() => {
      printStringsLength('Hello', 2);
    }).toThrow();
    expect(() => {
      printStringsLength(1, 2);
    }).toThrow();
  });
});

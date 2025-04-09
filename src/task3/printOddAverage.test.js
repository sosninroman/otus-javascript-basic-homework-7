import { printOddAverage } from './printOddAverage';

describe('Function printOddAverage', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('выводит среднее арифметическое нечетных чисел от 0 до заданного значения', () => {
    const data = new Map([
      [1, 1],
      [2, 1],
      [3, 2],
      [5, 3],
      [10, 5],
      [-12, 0],
    ]);
    for (let [input, expectedValue] of data) {
      window.prompt = jest.fn(() => input);
      printOddAverage();
      expect(console.log).toHaveBeenCalledWith(expectedValue);
    }
  });

  test('выбрасывает ошибку, если заданное значение не является числом', () => {
    window.prompt = jest.fn(() => 'text');
    expect(() => {
      printOddAverage();
    }).toThrow();
  });
});

import { printOddAverage } from './printOddAverage';

describe('Function printOddAverage', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('prints average for integers', () => {
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

  test('throws if user enter not a number', () => {
    window.prompt = jest.fn(() => 'text');
    expect(() => {
      printOddAverage();
    }).toThrow();
  });
});

import { printMaxAndMinValueOfArray } from './printMaxAndMinValueOfArray';

describe('Function printMaxAndMinValueOfArray', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('prints max and then min value of input array', () => {
    printMaxAndMinValueOfArray([3, 2, 7, 5, 80, 1]);
    expect(console.log).toHaveBeenCalledWith(80, 1);
  });

  test("doesn't call console.log if takes an empty array", () => {
    printMaxAndMinValueOfArray([]);
    expect(console.log).not.toHaveBeenCalled();
  });

  test('throws an Error if take input value that not an instance of Array', () => {
    expect(() => {
      printMaxAndMinValueOfArray({});
    }).toThrow();
  });

  test('throws an Error if any value in input array is not a number', () => {
    expect(() => {
      printMaxAndMinValueOfArray([1, 'two', 3]);
    }).toThrow();
  });
});

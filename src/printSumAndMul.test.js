import { printSumAndMul } from './printSumAndMul.js';

describe('Function printSumAndMul', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('prints 3 and 2 for 1 and 2', () => {
    printSumAndMul(1, 2);
    expect(console.log).toHaveBeenCalledWith(3, 2);
    expect(1 + 2).toEqual(3);
  });

  test('throws an error if is called without arguments', () => {
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

  test('throws an error if is called with wrong types', () => {
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

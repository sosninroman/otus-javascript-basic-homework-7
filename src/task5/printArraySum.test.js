import { printArraySum } from './printArraySum';

describe('Function printArraySum', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('prints 10 for [1,2,3,4]', () => {
    printArraySum([1, 2, 3, 4]);
    expect(console.log).toHaveBeenCalledWith(10);
  });

  test('throws an error if input value is not an Array', () => {
    expect(() => {
      printArraySum('aaa');
    }).toThrow();
  });

  test('throws an error if array contains not a number', () => {
    expect(() => {
      printArraySum([1, 'two', 3]);
    }).toThrow();
  });
});

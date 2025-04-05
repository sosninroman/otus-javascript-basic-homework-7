import { doubleArrayValues } from './doubleArrayValues';

describe('Function doubleArrayValues', () => {
  test('creates new Array with doubled elements', () => {
    expect(doubleArrayValues([1, 2, 3])).toEqual([2, 4, 6]);
  });

  test('returns empty Array for empty input Array', () => {
    expect(doubleArrayValues([])).toEqual([]);
  });

  test('throws an Error if input is not an instance of Array', () => {
    expect(() => {
      doubleArrayValues(new Set());
    }).toThrow();
  });

  test('throws an Error if input array contains values that are not numbers', () => {
    expect(() => {
      doubleArrayValues([1, 'two', 3]);
    }).toThrow();
  });
});

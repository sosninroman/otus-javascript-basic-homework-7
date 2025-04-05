import { pow } from './pow';

describe('Function pow', () => {
  test('2 ^ 3 = 8', () => {
    expect(pow(2, 3)).toBe(8);
  });
  test('16 ^ -1 = 0.0625', () => {
    expect(pow(16, -1)).toBeCloseTo(0.0625);
  });
  test('2 ^ 0 = 1', () => {
    expect(pow(2, 0)).toBe(1);
  });
  test('0 ^ 5 = 0', () => {
    expect(pow(0, 5)).toBe(0);
  });
  test('0 ^ -3 -> Error', () => {
    expect(() => {
      pow(0, -3);
    }).toThrow();
  });
  test('throws an Error if input values are not numbers', () => {
    expect(() => {
      pow('one', 2);
    }).toThrow();
  });
  test("doesn't support float power", () => {
    expect(() => {
      pow(2, 2.5);
    }).toThrow();
  });
});

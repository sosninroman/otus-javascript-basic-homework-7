import { diff } from './diff';

describe('Function diff', () => {
  test('returns absolute difference between two numbers', () => {
    expect(diff(3, 10)).toBe(7);
    expect(diff(10, 3)).toBe(7);
  });

  test('throws an Erray if any of arguments is not a number', () => {
    expect(() => {
      diff(1, 'two');
    }).toThrow();
    expect(() => {
      diff('one', 'two');
    }).toThrow();
    expect(() => {
      diff('one', 2);
    }).toThrow();
  });
});

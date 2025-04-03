import { arithmeticSequenceSum } from './arithmeticSequenceSum.js';

describe('Function sumArithmeticProgression', () => {
  test('returns 3825 for 50 and 100', () => {
    expect(arithmeticSequenceSum(50, 100)).toBe(3825);
  });
  test('throws an error for not numbers', () => {
    expect(() => {
      arithmeticSequenceSum('100', 'two');
    }).toThrow();
  });
  test('throws an error for not integers', () => {
    expect(() => {
      arithmeticSequenceSum(100.1, 20.2);
    }).toThrow();
  });
});

import { arithmeticSequenceSum } from './arithmeticSequenceSum.js';

describe('Function sumArithmeticProgression', () => {
  test('возвращает 3825 для 50 и 100', () => {
    expect(arithmeticSequenceSum(50, 100)).toBe(3825);
  });
  test('Выбрасывает ошибку, если аргументы не являются числами', () => {
    expect(() => {
      arithmeticSequenceSum('100', 'two');
    }).toThrow();
  });
  test('выбрасывает ошибку, если аргументы не являются целыми числами', () => {
    expect(() => {
      arithmeticSequenceSum(100.1, 20.2);
    }).toThrow();
  });
});

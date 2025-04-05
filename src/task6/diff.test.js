import { diff } from './diff';

describe('Function diff', () => {
  test('возвращает абсолютную разницу между двумя значениями', () => {
    expect(diff(3, 10)).toBe(7);
    expect(diff(10, 3)).toBe(7);
  });

  test('выбрасывает ошибку, если на вход подаются не числа', () => {
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

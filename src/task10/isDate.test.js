import { isDate } from './isDate';

describe('isDate', () => {
  test('Возвращает true, если передана дата в формате DD.MM.YYYY', () => {
    expect(isDate('12.12.1924')).toBe(true);
  });

  test('Не проверяет корректность даты', () => {
    expect(isDate('56.84.1924')).toBe(true);
  });

  test('Возвращет true,если передана дата в формате DD.MM.YY', () => {
    expect(isDate('12.12.24')).toBe(true);
  });

  test('Возвращает false для некорректных строк', () => {
    expect(isDate('unformatted')).toBe(false);
  });

  test('Возвращает false для аргументов, не являющихся строками', () => {
    expect(isDate(123)).toBe(false);
  });
});

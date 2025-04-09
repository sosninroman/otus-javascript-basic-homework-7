import { isEmail } from './isEmail';

describe('isEmail', () => {
  test('Возвращает true, если передана строка в формате mail@mail.com', () => {
    expect(isEmail('mail@mail.com')).toBe(true);
  });

  test('Возвращает false для некорректных строк', () => {
    expect(isEmail('unformatted')).toBe(false);
  });

  test('Возвращает false для аргументов, не являющихся строками', () => {
    expect(isEmail(123)).toBe(false);
  });
});

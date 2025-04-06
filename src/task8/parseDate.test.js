import { parseDate } from './parseDate';

describe('parseDate', () => {
  test("приводит строки вида 'DD.MM.YYYY' в значение типа Date", () => {
    expect(parseDate('12.03.1953')).toEqual(new Date(1953, 2, 12));
    expect(parseDate('01.12.1999')).toEqual(new Date(1999, 11, 1));
  });

  test('Выбрасывает ошибку, если строка неправильного формата', () => {
    expect(() => {
      parseDate('12.03.53');
    }).toThrow();
    expect(() => {
      parseDate('12.03');
    }).toThrow();
    expect(() => {
      parseDate('trash');
    }).toThrow();
    expect(() => {
      parseDate(1925689);
    }).toThrow();
  });
});

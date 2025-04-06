import { compareDates } from './compareDates';

describe('compareDates', () => {
  test('Возвращает 0, если даты равны', () => {
    expect(compareDates('21.01.1632', '21.01.1632')).toBe(0);
  });
  test('Возвращает -1, если первая дата находится перед второй', () => {
    expect(compareDates('21.01.1632', '22.01.1632')).toBe(-1);
  });
  test('Возвращает 1, если первая дата находится после второй', () => {
    expect(compareDates('21.01.1632', '20.01.1632')).toBe(1);
  });
  test('Выбрасывает ошибку, если введен неверный формат дат', () => {
    expect(() => {
      compareDates('211.01.1632', '20.01.1632');
    }).toThrow();
    expect(() => {
      compareDates('1632', '20.01.1632');
    }).toThrow();
    expect(() => {
      compareDates('trash', '20.01.1632');
    }).toThrow();
    expect(() => {
      compareDates(42, '20.01.1632');
    }).toThrow();
  });
});

import { doubleArrayValues } from './doubleArrayValues';

describe('Function doubleArrayValues', () => {
  test('создает новый массив, каждый элемент которого является удваенным значением из исходного', () => {
    expect(doubleArrayValues([1, 2, 3])).toEqual([2, 4, 6]);
  });

  test('для пустого массива возвращается пустой массив', () => {
    expect(doubleArrayValues([])).toEqual([]);
  });

  test('выбрасывает ошибку, если на вход подается не Array', () => {
    expect(() => {
      doubleArrayValues(new Set());
    }).toThrow();
  });

  test('выбрасывает ошибку, если во входном массиве находятся нечисловые элементы', () => {
    expect(() => {
      doubleArrayValues([1, 'two', 3]);
    }).toThrow();
  });
});

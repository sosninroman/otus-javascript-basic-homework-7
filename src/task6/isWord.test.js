import { isWord } from './isWord';

describe('Function isWord', () => {
  test('возвращает true, если входная строка является одним словом', () => {
    expect(isWord('word')).toBe(true);
  });

  test('возвращает false, если входная строка содержит несколько слов', () => {
    expect(isWord('to be or not to be')).toBe(false);
  });

  test('возвращает false, если на вход подается не строка', () => {
    expect(isWord(2)).toBe(false);
  });
});

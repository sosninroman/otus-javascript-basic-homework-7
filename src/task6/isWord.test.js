import { isWord } from './isWord';

describe('Function isWord', () => {
  test("returns true if input string doesn't contain space symbols", () => {
    expect(isWord('word')).toBe(true);
  });

  test('returns false if input string contains space symbols', () => {
    expect(isWord('to be or not to be')).toBe(false);
  });

  test('returns false for arguments that are not strings', () => {
    expect(isWord(2)).toBe(false);
  });
});

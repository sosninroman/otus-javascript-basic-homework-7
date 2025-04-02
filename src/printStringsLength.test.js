import { printStringsLength } from './printStringsLength.js';

describe('Function printStringsLength', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('prints 10 for "Hello" and "world', () => {
    printStringsLength('Hello', 'world');
    expect(console.log).toHaveBeenCalledWith(10);
  });

  test('throws an error if is called with wrong typs', () => {
    expect(() => {
      printStringsLength();
    }).toThrow();
    expect(() => {
      printStringsLength(1, 'world');
    }).toThrow();
    expect(() => {
      printStringsLength('Hello', 2);
    }).toThrow();
    expect(() => {
      printStringsLength(1, 2);
    }).toThrow();
  });
});

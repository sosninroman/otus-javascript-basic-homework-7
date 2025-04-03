import { printMaxNumber } from './printMaxNumber';

describe('Function printMaxNumber', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('print 5 for 1 and 5', () => {
    printMaxNumber(1, 5);
    expect(console.log).toHaveBeenCalledWith(5);
  });

  test('throws if is called with invalid arguments', () => {
    expect(() => {
      printMaxNumber();
    }).toThrow();
    expect(() => {
      printMaxNumber(1, 'two');
    }).toThrow();
    expect(() => {
      printMaxNumber('one', 2);
    }).toThrow();
    expect(() => {
      printMaxNumber('one', 'two');
    }).toThrow();
  });

  test('takes into account only the first two arguments', () => {
    printMaxNumber(1, 2, 3);
    expect(console.log).toHaveBeenCalledWith(2);
  });
});

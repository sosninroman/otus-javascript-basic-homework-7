import { getNumberAndPrintInternalSum } from './getNumberAndPrintInternalSum';

describe('Function getNumberAndPrintInternalSum', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  test('prints 6 for 123', () => {
    window.prompt = jest.fn(() => {
      return 123;
    });
    getNumberAndPrintInternalSum();
    expect(console.log).toHaveBeenCalledWith(6);
  });
  test('throws an error if for invalid input', () => {
    window.prompt = jest.fn(() => {
      return 12;
    });
    expect(() => {
      getNumberAndPrintInternalSum();
    }).toThrow();
    window.prompt = jest.fn(() => {
      return 1200;
    });
    expect(() => {
      getNumberAndPrintInternalSum();
    }).toThrow();
    window.prompt = jest.fn(() => {
      return '1200';
    });
    expect(() => {
      getNumberAndPrintInternalSum();
    }).toThrow();
  });
});

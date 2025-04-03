import { printMonth } from './printMonth';

describe('function printMonth', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('prints month for numbers from 1 to 12', () => {
    for (let i = 1; i <= 12; ++i) {
      window.prompt = jest.fn(() => i);
      printMonth();
    }

    expect(console.log).toHaveBeenNthCalledWith(1, 'January');
    expect(console.log).toHaveBeenNthCalledWith(2, 'February');
    expect(console.log).toHaveBeenNthCalledWith(3, 'March');
    expect(console.log).toHaveBeenNthCalledWith(4, 'April');
    expect(console.log).toHaveBeenNthCalledWith(5, 'May');
    expect(console.log).toHaveBeenNthCalledWith(6, 'June');
    expect(console.log).toHaveBeenNthCalledWith(7, 'July');
    expect(console.log).toHaveBeenNthCalledWith(8, 'August');
    expect(console.log).toHaveBeenNthCalledWith(9, 'September');
    expect(console.log).toHaveBeenNthCalledWith(10, 'October');
    expect(console.log).toHaveBeenNthCalledWith(11, 'November');
    expect(console.log).toHaveBeenNthCalledWith(12, 'December');
  });

  test('throws error for invalid input', () => {
    expect(() => {
      window.prompt = jest.fn(() => -1);
      printMonth();
    }).toThrow();
    expect(() => {
      window.prompt = jest.fn(() => 1000);
      printMonth();
    }).toThrow();
    expect(() => {
      window.prompt = jest.fn(() => 'text');
      printMonth();
    }).toThrow();
  });
});

import { printDayOfWeek } from './printDayOfWeek';

describe('printDayOfWeek', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  test('09.05.1945 -> Wednesday', () => {
    window.prompt = jest.fn(() => '09.05.1945');
    printDayOfWeek();
    expect(console.log).toHaveBeenCalledWith('Wednesday');
  });
  test('Выбрасывает ошибку для некорректного пользовательского ввода', () => {
    window.prompt = jest.fn(() => '322.05.1945');
    expect(() => {
      printDayOfWeek();
    }).toThrow();
    window.prompt = jest.fn(() => '12.05.22');
    expect(() => {
      printDayOfWeek();
    }).toThrow();
  });
});

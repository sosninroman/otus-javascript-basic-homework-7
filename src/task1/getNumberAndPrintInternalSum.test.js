import { getNumberAndPrintInternalSum } from './getNumberAndPrintInternalSum';

describe('Function getNumberAndPrintInternalSum', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  test('Запрашивает у пользователя трехзначное число и выводит в консоль сумму цифр этого числа', () => {
    window.prompt = jest.fn(() => {
      return 123;
    });
    getNumberAndPrintInternalSum();
    expect(console.log).toHaveBeenCalledWith(6);
  });
  test('Выбрасывает ошибку при попытке ввода недопустимых значений', () => {
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

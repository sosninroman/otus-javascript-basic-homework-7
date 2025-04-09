import { printMinutesFromTheBeginingOfDay } from './printMinutesFromTheBeginingOfDay';

describe('printMinutesFromTheBeginingOfDay', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('Выводит в консоль количество минут с начала текущего дня', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => {
      return new Date(2025, 4, 6, 0, 10, 0);
    });
    printMinutesFromTheBeginingOfDay();
    expect(console.log).toHaveBeenCalledWith(10);
  });
});

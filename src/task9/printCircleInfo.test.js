import { printCircleInfo } from './printCircleInfo';

describe('printCircleInfo', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('Выводит длину окружности и площать круга по значению радиуса', () => {
    printCircleInfo(3);
    const args = console.log.mock.calls[0];
    expect(args).toHaveLength(2);
    expect(args[0]).toBeCloseTo(18.8496);
    expect(args[1]).toBeCloseTo(28.2743);
  });

  test('Работает для значений, не являющихся целыми числами', () => {
    printCircleInfo(5.5);
    const args = console.log.mock.calls[0];
    expect(args).toHaveLength(2);
    expect(args[0]).toBeCloseTo(34.5575);
    expect(args[1]).toBeCloseTo(95.0332);
  });

  test('Выбрасывает ошибку, если аргумент не является числом', () => {
    expect(() => {
      printCircleInfo('one');
    }).toThrow();
  });
});

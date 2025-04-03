import { createAdmin } from './createAdmin';

export { createAdmin } from './createAdmin';

const AGE = 18;

describe('Function createAdmin', () => {
  beforeAll(() => {
    jest.spyOn(window, 'prompt').mockImplementation(() => {
      return AGE;
    });
  });
  test("creates user with age from input and set property 'role' to 'admin'", () => {
    const result = createAdmin();
    expect(result).toEqual({ name: 'John', age: AGE, role: 'admin' });
  });
});

import { isFunction } from '../src';

test('Check if value is a function', () => {
  const fn = () => {};
  const notFn = 'hello';

  expect(isFunction(fn)).toBe(true);
  expect(isFunction(notFn)).toBe(false);
  expect(isFunction(null)).toBe(false);
  expect(isFunction(undefined)).toBe(false);
  expect(isFunction(123)).toBe(false);
  expect(isFunction({})).toBe(false);
});

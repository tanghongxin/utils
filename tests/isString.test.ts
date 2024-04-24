import { isString } from '../src';

test('Returns true if the value is a string', () => {
  expect(isString('Hello')).toBe(true);
});

test('Returns false if the value is not a string', () => {
  expect(isString(123)).toBe(false);
  expect(isString(true)).toBe(false);
  expect(isString([])).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
});

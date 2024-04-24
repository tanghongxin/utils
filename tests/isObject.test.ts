import { isObject } from '../src';

test('Returns true if the value is an object', () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(true);
  expect(isObject(new Date())).toBe(true);
});

test('Returns false if the value is not an object', () => {
  expect(isObject(null)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject('')).toBe(false);
  expect(isObject(123)).toBe(false);
  expect(isObject(true)).toBe(false);
});

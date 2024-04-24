import { isRegExp } from '../src';

test('Returns true if the value is a RegExp object', () => {
  expect(isRegExp(/test/)).toBe(true);
});

test('Returns false if the value is not a RegExp object', () => {
  expect(isRegExp('')).toBe(false);
  expect(isRegExp(123)).toBe(false);
  expect(isRegExp(true)).toBe(false);
  expect(isRegExp([])).toBe(false);
  expect(isRegExp({})).toBe(false);
  expect(isRegExp(null)).toBe(false);
  expect(isRegExp(undefined)).toBe(false);
});

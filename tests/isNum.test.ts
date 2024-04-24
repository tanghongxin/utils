import { isNum } from '../src';

test('Returns true if the value is a number', () => {
  expect(isNum(123)).toBe(true);
  expect(isNum(0)).toBe(true);
  expect(isNum(3.14)).toBe(true);
});

test('Returns false if the value is not a number', () => {
  expect(isNum('123')).toBe(false);
  expect(isNum(true)).toBe(false);
  expect(isNum([])).toBe(false);
  expect(isNum({})).toBe(false);
  expect(isNum(null)).toBe(false);
  expect(isNum(undefined)).toBe(false);
});

import { isSet } from '../src';

test('Returns true if the value is a Set object', () => {
  expect(isSet(new Set())).toBe(true);
});

test('Returns false if the value is not a Set object', () => {
  expect(isSet([])).toBe(false);
  expect(isSet('')).toBe(false);
  expect(isSet(0)).toBe(false);
  expect(isSet({})).toBe(false);
});

import { isMap } from '../src';

test('Returns true if the value is a Map object', () => {
  expect(isMap(new Map())).toBe(true);
});

test('Returns false if the value is not a Map object', () => {
  expect(isMap([])).toBe(false);
  expect(isMap('')).toBe(false);
  expect(isMap(0)).toBe(false);
  expect(isMap({})).toBe(false);
});

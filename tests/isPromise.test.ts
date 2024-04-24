import { isPromise } from '../src';

test('Returns true if the value is a Promise', () => {
  expect(isPromise(Promise.resolve())).toBe(true);
});

test('Returns false if the value is not a Promise', () => {
  expect(isPromise(123)).toBe(false);
  expect(isPromise('')).toBe(false);
  expect(isPromise([])).toBe(false);
  expect(isPromise({})).toBe(false);
  expect(isPromise(null)).toBe(false);
  expect(isPromise(undefined)).toBe(false);
});

import { isEmpty } from '../src';

test('Check if value is empty based on its type', () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty('')).toBe(true);
  expect(isEmpty([])).toBe(true);
  expect(isEmpty({})).toBe(true);
  expect(isEmpty(new Set())).toBe(true);
  expect(isEmpty(new Map())).toBe(true);
  expect(isEmpty(0)).toBe(false);
  expect(isEmpty(false)).toBe(false);
  expect(isEmpty(1)).toBe(false);
  expect(isEmpty('Hello')).toBe(false);
  expect(isEmpty([1, 2, 3])).toBe(false);
  expect(isEmpty({ key: 'value' })).toBe(false);
  expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
  expect(isEmpty(new Map([['key', 'value']]))).toBe(false);
});

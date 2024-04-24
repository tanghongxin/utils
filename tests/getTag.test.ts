import { getTag } from '../src';

test('Get tag name for different types', () => {
  const obj = {};
  const arr = [];
  const str = 'Hello';
  const num = 123;
  const bool = true;

  expect(getTag(obj)).toBe('[object Object]');
  expect(getTag(arr)).toBe('[object Array]');
  expect(getTag(str)).toBe('[object String]');
  expect(getTag(num)).toBe('[object Number]');
  expect(getTag(bool)).toBe('[object Boolean]');
});

test('Get tag name for null and undefined', () => {
  const n = null;
  const u = undefined;

  expect(getTag(n)).toBe('[object Null]');
  expect(getTag(u)).toBe('[object Undefined]');
});

import { isDate } from '../src';

test('Check if value is a Date object', () => {
  const date = new Date();
  const notDate = '2022-01-01';

  expect(isDate(date)).toBe(true);
  expect(isDate(notDate)).toBe(false);
  expect(isDate(null)).toBe(false);
  expect(isDate(undefined)).toBe(false);
  expect(isDate(123)).toBe(false);
  expect(isDate({})).toBe(false);
});

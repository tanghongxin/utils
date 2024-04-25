import { isDateStr } from '../src';

test('Validate valid date string', () => {
  const validDate = '2022/12/31';
  expect(isDateStr(validDate)).toBe(true);
});

test('Validate invalid date string', () => {
  const invalidDate = '2022/13/01';
  expect(isDateStr(invalidDate)).toBe(false);
});

test('Validate date string with incorrect format', () => {
  const invalidFormatDate = '31/12/2022';
  expect(isDateStr(invalidFormatDate)).toBe(false);
});

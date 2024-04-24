import { dateValidate } from '../src';

test('Validate valid date string', () => {
  const validDate = '2022/12/31';
  expect(dateValidate(validDate)).toBe(true);
});

test('Validate invalid date string', () => {
  const invalidDate = '2022/13/01';
  expect(dateValidate(invalidDate)).toBe(false);
});

test('Validate date string with incorrect format', () => {
  const invalidFormatDate = '31/12/2022';
  expect(dateValidate(invalidFormatDate)).toBe(false);
});

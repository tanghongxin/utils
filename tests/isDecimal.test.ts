import { isDecimal } from '../src';

test('Check if number is a decimal', () => {
  expect(isDecimal(0.5)).toBe(true);
  expect(isDecimal(1)).toBe(false);
  expect(isDecimal(1.0)).toBe(false);
  expect(isDecimal(1.1)).toBe(true);
  expect(isDecimal(1.000)).toBe(false);
  expect(isDecimal(0)).toBe(false);
});

import { formatNumberPrecision } from '../src';

test('Format number with default precision', () => {
  const formattedNumber = formatNumberPrecision(1234567.89);
  expect(formattedNumber).toBe('1234567.89');
});

test('Format number with custom precision', () => {
  const formattedNumber = formatNumberPrecision(1234.5678, 3);
  expect(formattedNumber).toBe('1234.568');
});

test('Format number with custom zh-CN locals', () => {
  const formattedNumber = formatNumberPrecision(1234.5678, 3, 'zh-CN');
  expect(formattedNumber).toBe('1,234.568');
});

test('Format number with custom zh-Hans-CN-u-nu-hanidec locals', () => {
  const formattedNumber = formatNumberPrecision(1234.5678, 3, 'zh-Hans-CN-u-nu-hanidec');
  expect(formattedNumber).toBe('一,二三四.五六八');
});

test('Format number with custom zh-Hans-CN-u-nu-hanidec locals', () => {
  const formattedNumber = formatNumberPrecision(1234.5678, 3, 'zh-Hans-CN-u-nu-hanidec');
  expect(formattedNumber).toBe('一,二三四.五六八');
});

test('Format number with custom de-DE locals', () => {
  const formattedNumber = formatNumberPrecision(1234.5678, 3, 'de-DE');
  expect(formattedNumber).toBe('1.234,568');
});

test('Format number with zero precision', () => {
  const formattedNumber = formatNumberPrecision(1234.5678, 0);
  expect(formattedNumber).toBe('1235');
});

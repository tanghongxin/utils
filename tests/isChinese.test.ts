import { isChinese } from '../src';

test('Check if input string is a Chinese string', () => {
  expect(isChinese('你好')).toBe(true);
  expect(isChinese('Hello')).toBe(false);
  expect(isChinese('')).toBe(false);
  expect(isChinese('123')).toBe(false);
});

test('Check if input string contains Chinese characters', () => {
  expect(isChinese('Hello 你好')).toBe(false);
  expect(isChinese('123 你好')).toBe(false);
  expect(isChinese('你好 123')).toBe(false);
  expect(isChinese('123 Hello')).toBe(false);
});

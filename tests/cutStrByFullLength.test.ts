import { cutStrByFullLength } from '../src';

test('Cut string based on full length', () => {
  const str = 'Hello, 世界！';
  const maxLength = 8;
  const result = cutStrByFullLength(str, maxLength);
  expect(result).toBe('Hello, ');
});

test('Cut string with maxLength equal to full length of string', () => {
  const str = 'Hello, 世界！';
  const maxLength = 13;
  const result = cutStrByFullLength(str, maxLength);
  expect(result).toBe(str);
});

test('Cut empty string', () => {
  const str = '';
  const maxLength = 10;
  const result = cutStrByFullLength(str, maxLength);
  expect(result).toBe('');
});

import { toKebabCase } from '../src';

test('Convert a string to kebab-case', () => {
  expect(toKebabCase('helloWorld')).toBe('hello-world');
  expect(toKebabCase('camelCase')).toBe('camel-case');
  expect(toKebabCase('spaced string')).toBe('spaced-string');
  expect(toKebabCase('UPPER CASE')).toBe('upper-case');
  expect(toKebabCase('with_underscores')).toBe('with-underscores');
  expect(toKebabCase('with numbers 123')).toBe('with-numbers-123');
  expect(toKebabCase('with-hyphens')).toBe('with-hyphens');
  expect(toKebabCase('')).toBe('');
});

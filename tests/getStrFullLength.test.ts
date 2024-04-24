import { getStrFullLength } from '../src';

test('Calculate full length of string', () => {
  const str = 'Hello, 世界！';
  const fullLength = getStrFullLength(str);
  expect(fullLength).toBe(13);
});

test('Calculate full length of empty string', () => {
  const str = '';
  const fullLength = getStrFullLength(str);
  expect(fullLength).toBe(0);
});

test('Calculate full length of string with only single byte characters', () => {
  const str = 'Hello';
  const fullLength = getStrFullLength(str);
  expect(fullLength).toBe(5);
});

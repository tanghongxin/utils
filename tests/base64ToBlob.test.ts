import { base64ToBlob } from '../src';

test('Convert base64 string to Blob object', () => {
  const base64String = 'data:text/plain;base64,SGVsbG8gV29ybGQ=';
  const blob = base64ToBlob(base64String);

  expect(blob instanceof Blob).toBe(true);
});

import { base64ToFile } from '../src';

test('Convert base64 string to File object', () => {
  const base64String = 'data:text/plain;base64,SGVsbG8gV29ybGQ=';
  const fileName = 'example.txt';
  const file = base64ToFile(base64String, fileName);

  expect(file instanceof File).toBe(true);
  expect(file.name).toBe(fileName);
});

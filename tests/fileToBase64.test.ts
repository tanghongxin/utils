import { fileToBase64 } from '../src';

test('Convert file to base64 encoding', async () => {
  const file = new File(['Hello, world!'], 'example.txt', { type: 'text/plain' });
  const base64String = 'data:text/plain;base64,SGVsbG8sIHdvcmxkIQ==';

  const result = await fileToBase64(file);
  expect(result).toBe(base64String);
});

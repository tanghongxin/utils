import { fileToBlob } from '../src';

test('Convert file to Blob', async () => {
  const file = new File(['Hello, world!'], 'example.txt', { type: 'text/plain' });
  const blob = await fileToBlob(file);

  expect(blob).toBeInstanceOf(Blob);
  expect(blob.size).toBe(file.size);
  expect(blob.type).toBe(file.type);
});

import { blobToBase64 } from '../src';

test('Convert Blob to base64 string', async () => {
  const blob = new Blob(['Hello, world!'], { type: 'text/plain' });
  const base64 = await blobToBase64(blob);

  expect(typeof base64).toBe('string');
  expect(base64).toMatch(/^data:text\/plain;base64,/);
});

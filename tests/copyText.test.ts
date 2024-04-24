import { copyText } from '../src';

// https://github.com/jsdom/jsdom/issues/1568
test.skip('Copy text to clipboard', async () => {
  const text = 'Hello, world!';
  await copyText(text);
  const clipboardText = await navigator.clipboard.readText();
  expect(clipboardText).toBe(text);
});

test.skip('Reject promise if clipboard API is not available', async () => {
  // Simulate clipboard API not being available
  Object.defineProperty(navigator, 'clipboard', { value: undefined });
  const text = 'Hello, world!';
  await expect(copyText(text)).rejects.toThrow('Clipboard API not available');
});

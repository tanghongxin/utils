import { isWin } from '../src';

test('Returns true if the platform is Windows', () => {
  Object.defineProperty(window.navigator, 'platform', {
    configurable: true,
    value: 'Win32',
  });
  expect(isWin()).toBe(true);
});

test('Returns false if the platform is not Windows', () => {
  Object.defineProperty(window.navigator, 'platform', {
    configurable: true,
    value: 'MacIntel',
  });
  expect(isWin()).toBe(false);
});

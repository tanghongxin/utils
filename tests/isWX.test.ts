import { isWX } from '../src';

test('Returns true if the user agent indicates that the browser is WeChat', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    configurable: true,
    value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.14(0x18000C51) NetType/WIFI Language/zh_CN',
  });
  expect(isWX()).toBe(true);
});

test('Returns false if the user agent does not indicate that the browser is WeChat', () => {
  Object.defineProperty(window.navigator, 'userAgent', {
    configurable: true,
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  });
  expect(isWX()).toBe(false);
});

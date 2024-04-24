import { randomString } from '../src';

test('Generate a random string of specified length', () => {
  const length = 10;
  const randomString1 = randomString(length);
  const randomString2 = randomString(length);

  expect(randomString1).toHaveLength(length);
  expect(randomString2).toHaveLength(length);
  expect(randomString1).not.toBe(randomString2);
});

test('Generate a random string of default length if no length is provided', () => {
  const defaultLength = 32;
  const randomString0 = randomString();

  expect(randomString0).toHaveLength(defaultLength);
});

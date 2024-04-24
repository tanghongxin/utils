import { formatFileSize } from '../src';

test('Returns a human-readable file size with precision', () => {
  const sizeInBytes = 1024;
  const expectedResult = '1 KB';
  expect(formatFileSize(sizeInBytes, 0)).toBe(expectedResult);
});

test('Returns a human-readable file size with precision', () => {
  const sizeInBytes = 1024 * 1024 * 1024;
  const expectedResult = '1.00 GB';
  expect(formatFileSize(sizeInBytes)).toBe(expectedResult);
});

test('Returns a human-readable file size with precision', () => {
  const sizeInBytes = 1024 * 1024 * 1024 * 1.555;
  const expectedResult = '1.56 GB';
  expect(formatFileSize(sizeInBytes)).toBe(expectedResult);
});

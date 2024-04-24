import { chunk } from '../src';

test('Chunk array into smaller arrays', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const size = 3;
  const result = chunk(arr, size);

  expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
});

test('Chunk array with size greater than array length', () => {
  const arr = [1, 2, 3];
  const size = 5;
  const result = chunk(arr, size);

  expect(result).toEqual([[1, 2, 3]]);
});

test('Chunk empty array', () => {
  const arr: number[] = [];
  const size = 3;
  const result = chunk(arr, size);

  expect(result).toEqual([]);
});

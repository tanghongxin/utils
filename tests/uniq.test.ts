import { uniq } from '../src';

test('Generate a new array with unique elements', () => {
  const arr1 = [1, 2, 2, 3, 4, 4, 5];
  const arr2 = ['apple', 'banana', 'apple', 'cherry', 'banana'];

  expect(uniq(arr1)).toEqual([1, 2, 3, 4, 5]);
  expect(uniq(arr2)).toEqual(['apple', 'banana', 'cherry']);
  expect(uniq([])).toEqual([]);
  expect(uniq([1, 1, 1])).toEqual([1]);
});

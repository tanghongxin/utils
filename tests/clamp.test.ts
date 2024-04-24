import { clamp } from '../src';

test('Clamp value between min and max', () => {
  expect(clamp(10, 5, 15)).toBe(10);
  expect(clamp(20, 5, 15)).toBe(15);
  expect(clamp(-5, 5, 15)).toBe(5);
});

test('Clamp value with min greater than max', () => {
  expect(clamp(10, 15, 5)).toBe(10);
  expect(clamp(20, 15, 5)).toBe(15);
  expect(clamp(-5, 15, 5)).toBe(5);
});

test('Clamp value with min equal to max', () => {
  expect(clamp(10, 5, 5)).toBe(5);
  expect(clamp(20, 5, 5)).toBe(5);
  expect(clamp(-5, 5, 5)).toBe(5);
});

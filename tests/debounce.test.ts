import { debounce } from '../src';

test('Debounce function', () => {
  vi.useFakeTimers();
  const callback = vi.fn();
  const debounced = debounce(callback, 100);

  debounced();
  debounced();
  debounced();
  vi.advanceTimersByTime(50);
  expect(callback).not.toBeCalled();
  vi.advanceTimersByTime(50);
  expect(callback).toBeCalledTimes(1);
});

test('Debounce function with different delay', () => {
  vi.useFakeTimers();
  const callback = vi.fn();
  const debounced = debounce(callback, 200);

  debounced();
  vi.advanceTimersByTime(100);
  expect(callback).not.toBeCalled();
  vi.advanceTimersByTime(100);
  expect(callback).toBeCalledTimes(1);
});

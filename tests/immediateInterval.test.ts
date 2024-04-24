import { immediateInterval } from '../src';

test('Execute callback immediately and set up recurring interval', () => {
  vi.useFakeTimers();
  const callback = vi.fn();
  const interval = immediateInterval(callback, 1000, 'arg1', 'arg2');

  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith('arg1', 'arg2');

  vi.advanceTimersByTime(1000);
  expect(callback).toHaveBeenCalledTimes(2);

  clearInterval(interval);
});

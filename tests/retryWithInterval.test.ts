import { retryWithInterval } from '../src/retryWithInterval';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

test('returns result immediately on first success', async () => {
  const cb = vi.fn().mockResolvedValue('ok');

  const promise = retryWithInterval(100, 3, cb);
  await vi.runAllTimersAsync();
  const result = await promise;

  expect(result).toBe('ok');
  expect(cb).toHaveBeenCalledTimes(1);
});

test('retries on falsy result and eventually succeeds', async () => {
  const cb = vi.fn()
    .mockResolvedValueOnce(null)
    .mockResolvedValueOnce(0)
    .mockResolvedValueOnce('success');

  const promise = retryWithInterval(100, 3, cb);
  await vi.runAllTimersAsync();
  const result = await promise;

  expect(result).toBe('success');
  expect(cb).toHaveBeenCalledTimes(3);
});

test('retries on thrown error and eventually succeeds', async () => {
  const cb = vi.fn()
    .mockRejectedValueOnce(new Error('fail1'))
    .mockRejectedValueOnce(new Error('fail2'))
    .mockResolvedValueOnce('recovered');

  const promise = retryWithInterval(100, 3, cb);
  await vi.runAllTimersAsync();
  const result = await promise;

  expect(result).toBe('recovered');
  expect(cb).toHaveBeenCalledTimes(3);
});

test('throws after all retries exhausted (all falsy)', async () => {
  const cb = vi.fn().mockResolvedValue(null);

  const promise = retryWithInterval(100, 3, cb);
  // attach rejection handler first to avoid unhandled rejection
  const assertion = expect(promise).rejects.toThrow('Retry failed');
  await vi.runAllTimersAsync();
  await assertion;

  expect(cb).toHaveBeenCalledTimes(3);
});

test('throws original error after all retries exhausted (all throw)', async () => {
  const cb = vi.fn().mockRejectedValue(new Error('persistent error'));

  const promise = retryWithInterval(100, 3, cb);
  const assertion = expect(promise).rejects.toThrow('persistent error');
  await vi.runAllTimersAsync();
  await assertion;

  expect(cb).toHaveBeenCalledTimes(3);
});

test('sleeps for the specified interval between retries', async () => {
  const cb = vi.fn()
    .mockResolvedValueOnce(null)
    .mockResolvedValueOnce(null)
    .mockResolvedValueOnce('done');

  const setTimeoutSpy = vi.spyOn(global, 'setTimeout');

  const promise = retryWithInterval(500, 3, cb);
  await vi.runAllTimersAsync();
  await promise;

  // 3 attempts: 2 failures + 1 success → 1 sleep call (after 2nd failure)
  const sleepCalls = setTimeoutSpy.mock.calls.filter(
    ([, delay]) => delay === 500,
  );
  expect(sleepCalls).toHaveLength(1);
});

test('does not sleep before the first attempt', async () => {
  const cb = vi.fn().mockResolvedValue('ok');

  const promise = retryWithInterval(100, 1, cb);
  await vi.runAllTimersAsync();
  await promise;

  // No setTimeout with the interval delay should have been called
  const delayCalls = (global.setTimeout as ReturnType<typeof vi.fn>).mock?.calls?.filter?.(
    ([, delay]: [unknown, number]) => delay === 100,
  ) ?? [];
  expect(delayCalls).toHaveLength(0);
});

test('uses default parameters correctly', async () => {
  const promise = retryWithInterval();
  await vi.runAllTimersAsync();
  const result = await promise;

  expect(result).toBe(true);
});

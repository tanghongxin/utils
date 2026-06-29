import { sleep } from './sleep';

/* eslint-disable no-await-in-loop */

/**
 * Retry a callback at a fixed interval until it succeeds or max attempts are exhausted.
 *
 * @param ms      - Delay in milliseconds between each retry attempt.
 * @param retries - Maximum number of attempts.
 * @param cb      - Async callback whose result determines success (truthy) or failure (falsy/throw).
 * @returns The first truthy result from the callback.
 * @throws  If all attempts are exhausted without a truthy result.
 */
export const retryWithInterval = async <T>(
  ms = 4,
  retries = 1,
  cb = async () => true as T,
): Promise<T> => {
  let lastError: unknown;

  for (let i = 0; i < retries; i++) {
    try {
      const result = await cb();
      if (result) {
        return result;
      }
    } catch (error) {
      lastError = error;
    }

    if (i > 0) {
      await sleep(ms);
    }
  }

  throw lastError instanceof Error ? lastError : new Error('Retry failed');
};

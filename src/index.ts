export * from './basic';
export * from './color';
export * from './date';
export * from './dom';
export * from './file';
export * from './ua';
export * from './vue';

/**
 * Executes the callback immediately and then sets up a recurring interval to call the callback function.
 *
 * @param cb - The callback function to be executed.
 * @param ms - The time interval for the recurring callback.
 * @param argus - The arguments to be passed to the callback function.
 * @return The ID value that uniquely identifies the interval.
*/
export function immediateInterval(cb: Function, ms: number, ...argus: any[]): number {
  cb(...argus);
  return setInterval(cb, ms, ...argus);
}

/**
 * Returns a debounced function that delays invoking the input function until after `delay` milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @param func - The function to be invoked after `delay` milliseconds have elapsed since the last time the debounced function was invoked.
 * @param delay - The number of milliseconds to delay before invoking the `func`.
 * @return - Returns the debounced function.
 */
export function debounce(func: Function, delay: number): Function {
  let timerId: ReturnType<typeof setTimeout>;

  // eslint-disable-next-line func-names
  return function (...args: any[]) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * Pause execution for a specified number of milliseconds.
 *
 * @param ms - The number of milliseconds to pause execution.
 * @return A promise that resolves after the specified number of milliseconds.
 */
export const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

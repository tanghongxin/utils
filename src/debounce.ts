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

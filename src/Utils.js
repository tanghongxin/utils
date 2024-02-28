/**
 * Executes the callback immediately and then sets up a recurring interval to call the callback function.
 *
 * @param {function} cb - The callback function to be executed.
 * @param {number} ms - The time interval for the recurring callback.
 * @param {...any} argus - The arguments to be passed to the callback function.
 * @return {number} The ID value that uniquely identifies the interval.
*/
export function immediateInterval(cb, ms, ...argus) {
  cb(...argus)
  return setInterval(cb, ms, ...argus)
}

/**
 * Returns a debounced function that delays invoking the input function until after `delay` milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @param {Function} func - The function to be invoked after `delay` milliseconds have elapsed since the last time the debounced function was invoked.
 * @param {number} delay - The number of milliseconds to delay before invoking the `func`.
 * @return {Function} - Returns the debounced function.
 */
export function debounce(func, delay) {
  let timerId

  return function (...args) {
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * Pause execution for a specified number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to pause execution.
 * @return {Promise} A promise that resolves after the specified number of milliseconds.
 */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Check if the given object is a Promise.
 *
 * @param {any} obj - The object to be checked
 * @return {boolean} Whether the object is a Promise or not
*/
export function isPromise(obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}

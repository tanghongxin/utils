/**
 * Check if the given object is a Promise.
 *
 * @param obj - The object to be checked
 * @return Whether the object is a Promise or not
*/
export function isPromise(obj: any): boolean {
  return (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

/**
 * Check if the value is a function.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a function, otherwise returns false.
 */
export const isFunction = (val: unknown): val is Function => typeof val === 'function';

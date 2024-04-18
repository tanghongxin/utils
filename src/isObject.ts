/**
 * Check if the value is an object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is an object, otherwise returns false.
 */
export const isObject = (val: unknown): boolean => val !== null && typeof val === 'object';

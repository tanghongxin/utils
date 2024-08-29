/**
 * Check if the value is a string.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a string, otherwise returns false.
 */
export const isString = (val: unknown): val is string => typeof val === 'string';

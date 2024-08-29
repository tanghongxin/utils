import { getTag } from './getTag';

/**
 * Check if the value is a Date object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a Date object, otherwise returns false.
 */
export const isDate = (val: unknown): val is Date => getTag(val) === '[object Date]';

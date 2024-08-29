import { getTag } from './getTag';

/**
 * Check if the value is a Set object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a Set object, otherwise returns false.
 */
export const isSet = (val: unknown): val is Set<any> => getTag(val) === '[object Set]';

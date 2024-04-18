import { getTag } from './getTag';

/**
 * Check if the value is a RegExp object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a RegExp object, otherwise returns false.
 */
export const isRegExp = (val: unknown): boolean => getTag(val) === '[object RegExp]';

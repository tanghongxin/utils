import { getTag } from './getTag';

/**
 * Check if the value is a Map object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a Map object, otherwise returns false.
 */
export const isMap = (val: unknown): val is Map<any, any> => getTag(val) === '[object Map]';

import { isFunction } from './isFunction';
import { isObject } from './isObject';

/**
 * Check if the given object is a Promise.
 *
 * @param {any} obj - The object to be checked
 * @return {boolean} Whether the object is a Promise or not
 */
export const isPromise = <T extends unknown = unknown>(val: unknown): val is Promise<any> => (
  (isObject(val) || isFunction(val))
    && isFunction((val as Promise<T>).then)
    && isFunction((val as Promise<T>).catch)
);

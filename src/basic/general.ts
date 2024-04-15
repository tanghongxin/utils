export const objectToString = Object.prototype.toString;

/**
 * @function toTypeString
 * @returns {string}
 */
export const toTypeString = (value: unknown): string => objectToString.call(value);

export const { isArray } = Array;

/**
 * Check if the value is a number.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a number, otherwise returns false.
 */
export const isNum = (val: unknown): boolean => typeof (val) === 'number';

/**
 * Check if the value is a Map object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a Map object, otherwise returns false.
 */
export const isMap = (val: unknown): boolean => toTypeString(val) === '[object Map]';

/**
 * Check if the value is a Set object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a Set object, otherwise returns false.
 */
export const isSet = (val: unknown): boolean => toTypeString(val) === '[object Set]';

/**
 * Check if the value is a Date object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a Date object, otherwise returns false.
 */
export const isDate = (val: unknown): boolean => toTypeString(val) === '[object Date]';

/**
 * Check if the value is a RegExp object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a RegExp object, otherwise returns false.
 */
export const isRegExp = (val: unknown): boolean => toTypeString(val) === '[object RegExp]';

/**
 * Check if the value is a function.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a function, otherwise returns false.
 */
export const isFunction = (val: unknown): boolean => typeof val === 'function';

/**
 * Check if the value is a string.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a string, otherwise returns false.
 */
export const isString = (val: unknown): boolean => typeof val === 'string';

/**
 * Check if the value is a symbol.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a symbol, otherwise returns false.
 */
export const isSymbol = (val: unknown): boolean => typeof val === 'symbol';

/**
 * Check if the value is an object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is an object, otherwise returns false.
 */
export const isObject = (val: unknown): boolean => val !== null && typeof val === 'object';

/**
 * Check if the given object is a Promise.
 *
 * @param {any} obj - The object to be checked
 * @return {boolean} Whether the object is a Promise or not
 */
export const isPromise = <T extends unknown = unknown>(val: unknown): boolean => (
  (isObject(val) || isFunction(val))
    && isFunction((val as Promise<T>).then)
    && isFunction((val as Promise<T>).catch)
);

/**
 * Check if the input value is empty based on its type.
 *
 * @param val - The value to be checked for emptiness
 * @return true if the value is empty, false otherwise
 */
export function isEmpty(val: any): boolean {
  switch (Object.prototype.toString.call(val)) {
    case '[object Number]':
      return Number.isNaN(val as number);
    case '[object Array]':
    case '[object String]':
      return !(val as Array<any> | string).length;
    case '[object Object]':
      return !Object.keys(val as object).length;
    case '[object Null]':
    case '[object Undefined]':
      return true;
    default:
      return false;
  }
}

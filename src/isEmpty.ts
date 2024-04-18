import { getTag } from './getTag';

/**
 * Check if the input value is empty based on its type.
 *
 * @param val - The value to be checked for emptiness
 * @return true if the value is empty, false otherwise
 */
export function isEmpty(value: unknown): boolean {
  switch (getTag(value)) {
    case '[object Boolean]':
    case '[object Null]':
    case '[object Undefined]':
      return true;
    case '[object String]':
    case '[object Array]':
      return (value as string | any[]).length === 0;
    case '[object Object]':
      return Object.keys(value as object).length === 0;
    case '[object Map]':
    case '[object Set]':
      return (value as Map<any, any> | Set<any>).size === 0;
    case '[object Number]':
      return value === 0;
    default:
      return false;
  }
}

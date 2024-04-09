/**
 * Check if the input value is empty based on its type.
 *
 * @param val - The value to be checked for emptiness
 * @return true if the value is empty, false otherwise
 */
export function isEmpty(val: any): boolean {
  switch (Object.prototype.toString.call(val)) {
    case '[object Number]':
      return isNaN(val as number);
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

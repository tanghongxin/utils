/**
 * Check if the input value is empty based on its type.
 *
 * @param {any} val - The value to be checked for emptiness
 * @return {boolean} true if the value is empty, false otherwise
 */
export function isEmpty(val) {
  switch (Object.prototype.toString.call(val)) {
    case '[object Number]':
      return isNaN(val)
    case '[object Array]':
    case '[object String]':
      return !val.length
    case '[object Object]':
      return !Object.keys(val).length
    case '[object Null]':
    case '[object Undefined]':
      return true
    default:
      return false
  }
}

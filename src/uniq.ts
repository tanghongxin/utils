/**
 * Generates a new array with unique elements.
 *
 * @param {Array} arr - The input array
 * @return {Array} A new array with unique elements
 */
export function uniq<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/**
 * Check if the given number is a decimal.
 *
 * @param num - The number to be checked
 * @return true if the number is a decimal, false otherwise
 */
export function isDecimal(num: number): boolean {
  return !!(num % 1);
}

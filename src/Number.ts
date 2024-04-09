/**
 * Check if the given number is a decimal.
 *
 * @param num - The number to be checked
 * @return true if the number is a decimal, false otherwise
 */
export function isDecimal(num: number): boolean {
  return !!(num % 1);
}

/**
 * Check if the input string is a valid decimal number.
 *
 * @param str - The input string to be checked
 * @return Whether the input string is a valid decimal number
 */
export function isDecimalStr(str: string): boolean {
  return !isNaN(Number(str)) && isDecimal(Number(str));
}

/**
 * Format a number to a specific precision and add thousand separators.
 *
 * @param val - The number to be formatted
 * @param precision - The number of decimal places to round to (default is 2)
 * @return The formatted number with the specified precision and thousand separators
 */
export function formatterNumberPrecision(val: number, precision: number = 2): string {
  const num: number = Number(val);

  // Non-standard number handling
  if (isNaN(num)) {
    return val.toString();
  }

  const multiple: number = 10 ** precision;

  // Use Math.round instead of directly using toFixed to avoid precision issues (e.g., 2.135.toFixed(2) returns 2.13)
  const roundedNum: number = Math.round(num * multiple) / multiple;

  // Get the decimal part
  const fixedNumStr: string = roundedNum.toFixed(precision);

  // Split integer and decimal parts
  const [integerNum, decimalNum]: string[] = fixedNumStr.split('.');

  // Add thousand separators to the integer part
  return `${Number(integerNum).toLocaleString('zh-CN')}.${decimalNum}`;
}

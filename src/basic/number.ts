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
  return !Number.isNaN(Number(str)) && isDecimal(Number(str));
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
  if (Number.isNaN(num)) {
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

/**
 * Clamp a value between a minimum and maximum value.
 *
 * @param value - The value to be clamped
 * @param min - The minimum value that `value` can be
 * @param max - The maximum value that `value` can be
 * @return The clamped value between `min` and `max`
 */
export function clamp(value: number, min: number, max: number): number {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value);
}

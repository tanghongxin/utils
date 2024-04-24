/**
 * Format a number to a specific precision.
 *
 * @param {number} num - The number to be formatted
 * @param {number} precision - The number of decimal places to round to (default is 2)
 * @param {string} locals - An optional parameter specifying the locale for number formatting
 * @return {string} The formatted number with the specified precision and thousand separators
 */
export function formatNumberPrecision(num: number, precision: number = 2, locals?: string): string {
  const multiple: number = 10 ** precision;

  // Use Math.round instead of directly using toFixed to avoid precision issues (e.g., 2.135.toFixed(2) returns 2.13)
  const roundedNum: number = Math.round(num * multiple) / multiple;

  // Get the decimal part
  const fixedNumStr: string = roundedNum.toFixed(precision);

  // Split integer and decimal parts
  const [integerNum, decimalNum]: string[] = fixedNumStr.split('.');

  const res = precision > 0 ? `${integerNum}.${decimalNum}` : integerNum;

  if (locals) {
    return new Intl.NumberFormat(locals).format(Number(res));
  }

  return res;
}

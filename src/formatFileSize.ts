import { formatNumberPrecision } from './formatNumberPrecision';

/**
 * Returns a human-readable file size.
 *
 * @param size - The size of the file in bytes
 * @param precision - The number of decimal places to round to (default is 2)
 * @return A formatted string representing the file size
 */
export function formatFileSize(size: number, precision: number = 2): string {
  const units: string[] = ['TB', 'GB', 'MB', 'KB'];
  let unit: string = 'Bytes';
  while (size >= 1024 && units.length) {
    size /= 1024;
    unit = units.pop()!;
  }
  return `${formatNumberPrecision(size, precision)} ${unit}`;
}

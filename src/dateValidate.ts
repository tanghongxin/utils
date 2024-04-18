import { isNum } from './isNum';

/**
 * Validates the format and value of a date string.
 *
 * @param dateStr - The date string to be validated (format: YYYY/MM/DD).
 * @return true if the date string is valid, false otherwise.
 */
export function dateValidate(dateStr: string): boolean {
  const regex: RegExp = /^\d{4}\/\d{2}\/\d{2}$/;

  if (dateStr.match(regex) === null) {
    return false;
  }

  dateStr = dateStr.replaceAll('/', '-');
  const date: Date = new Date(dateStr);

  const timestamp: number = date.getTime();

  if (!isNum(timestamp) || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(dateStr);
}

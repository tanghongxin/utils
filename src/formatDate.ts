/**
 * Format the given date according to the specified format.
 *
 * @param date - The date to format
 * @param format - The format string for the output
 * @return The formatted string
 */
export function formatDate(date: Date | number, format: string): string {
  const d: Date = date instanceof Date ? date : new Date(date);
  const year: string = d.getFullYear().toString();
  const month: string = String(d.getMonth() + 1).padStart(2, '0');
  const day: string = String(d.getDate()).padStart(2, '0');
  const hours: string = String(d.getHours()).padStart(2, '0');
  const minutes: string = String(d.getMinutes()).padStart(2, '0');
  const seconds: string = String(d.getSeconds()).padStart(2, '0');

  return format
    .replace('yyyy', year)
    .replace('MM', month)
    .replace('dd', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

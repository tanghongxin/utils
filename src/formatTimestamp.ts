/**
 * Format the given timestamp according to the specified format.
 *
 * @param timestamp - The timestamp to format
 * @param format - The format string for the output
 * @return The formatted timestamp
 */
export function formatTimestamp(timestamp: number, format: string): string {
  const date: Date = new Date(timestamp);

  const year: string = date.getFullYear().toString();
  const month: string = String(date.getMonth() + 1).padStart(2, '0');
  const day: string = String(date.getDate()).padStart(2, '0');
  const hours: string = String(date.getHours()).padStart(2, '0');
  const minutes: string = String(date.getMinutes()).padStart(2, '0');
  const seconds: string = String(date.getSeconds()).padStart(2, '0');

  return format
    .replace('yyyy', year)
    .replace('MM', month)
    .replace('dd', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

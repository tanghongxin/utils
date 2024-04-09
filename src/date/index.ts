/**
 * Function to determine the appropriate greeting based on the time of day.
 *
 * @return The appropriate greeting for the time of day.
 */
export function welcome(): string {
  const time: Date = new Date();
  const hour: number = time.getHours();

  let greeting: string = '';
  switch (true) {
    case hour < 9:
      greeting = '早上好';
      break;
    case hour <= 11:
      greeting = '上午好';
      break;
    case hour <= 13:
      greeting = '中午好';
      break;
    case hour < 20:
      greeting = '下午好';
      break;
    default:
      greeting = '晚上好';
  }

  return greeting;
}

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

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(dateStr);
}

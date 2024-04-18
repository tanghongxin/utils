/**
 * Returns a human-readable file size.
 *
 * @param size - The size of the file in bytes
 * @return A formatted string representing the file size
 */
export function prettyFileSize(size: number): string {
  const units: string[] = ['TB', 'GB', 'MB', 'KB'];
  let unit: string = 'Bytes';
  while (size >= 1024 && units.length) {
    size /= 1024;
    unit = units.pop()!;
  }
  return `${Math.floor(100 * size) / 100} ${unit}`;
}

/**
 * Chunks an array into smaller arrays of a specified size.
 *
 * @param arr The array to be chunked, of type `T[]`.
 * @param size The size of each chunk, of type `number`.
 * @return An array of arrays of type `T[][]`.
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from<T, T[]>(
    { length: Math.ceil(arr.length / size) },
    (_, i) => arr.slice(i * size, i * size + size),
  );
}

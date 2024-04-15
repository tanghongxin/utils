/**
 * Generates a new array with unique elements.
 *
 * @param {Array} arr - The input array
 * @return {Array} A new array with unique elements
 */
export function uniq<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

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

/**
 * Randomizes the order of the values of an array, returning a new array.
 * @param arr The array to be shuffled, of type `T[]`.
 * @returns A new array with the same elements as `arr` but in a random order, of type `T[]`.
 */
export function shuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  let currentIndex = shuffled.length;
  let randomIndex: number;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex], shuffled[currentIndex]];
  }

  return shuffled;
}

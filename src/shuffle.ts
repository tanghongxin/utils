/**
 * Randomizes the order of the values of an array, returning a new array.
 * @param arr The array to be shuffled, of type `T[]`.
 * @returns A new array with the same elements as `arr` but in a random order, of type `T[]`.
 */
export function shuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  let currentIndex = shuffled.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex], shuffled[currentIndex]];
  }

  return shuffled;
}

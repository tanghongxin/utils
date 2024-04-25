/**
 * Generates a random Date object within the past 10 billion milliseconds.
 *
 * @return {Date} A random Date object.
*/
export function randomDate(): Date {
  return new Date(
    +new Date() - Math.floor(Math.random() * 10000000000),
  );
}

/**
 * Generates a random UUID.
 *
 * @param randomLength - The length of the random part of the UUID.
 * @return The generated UUID.
 */
export function uuid(randomLength: number = 10): string {
  return Number(Math.random().toString().slice(2, randomLength) + Date.now()).toString(36);
}

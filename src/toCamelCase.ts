/**
 * Converts a string to camelCase, with the first letter of each word except the first capitalized and no spaces.
 * @param str The input string to be converted, may be any type.
 * @return The resulting camelCase string. If the input is not a string, the result will be the empty string.
 */
export function toCamelCase(str: string): string {
  if (typeof str !== 'string') {
    return '';
  }

  const words = str.match(/[A-Za-z0-9]+/g);
  if (!words) return '';

  const camelCasedWords = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return camelCasedWords.join('');
}

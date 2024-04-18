/**
 * Converts a string to kebab-case, with all words separated by hyphens.
 * @param str The input string to be converted, may be any type.
 * @return The resulting kebab-case string. If the input is not a string, the result will be the empty string.
 */
export function toKebabCase(str: string): string {
  if (typeof str !== 'string') {
    return '';
  }

  return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((word) => word.toLowerCase())
    .join('-');
}

/**
 * Returns an object containing the parameters of the given URL.
 *
 * @param url The URL to be parsed, of type `string`.
 *
 * @returns An object containing the parameters of the URL, of type `{ [key: string]: string }`.
 */
export function getURLParameters(url: string): { [key: string]: string } {
  const { searchParams } = new URL(url);
  const parameters = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of searchParams.entries()) {
    parameters[key] = value;
  }

  return parameters;
}

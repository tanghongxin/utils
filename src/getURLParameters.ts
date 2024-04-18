/**
 * Returns an object containing the parameters of the given URL.
 *
 * @param url The URL to be parsed, of type `string`.
 *
 * @returns An object containing the parameters of the URL, of type `{ [key: string]: string }`.
 */
export function getURLParameters(url: string): { [key: string]: string } {
  const searchParams: string[] = (url.match(/([^?=&]+)(=([^&]*))/g) || []);
  return searchParams.reduce((a: { [key: string]: string }, v: string) => {
    const paramName: string = v.slice(0, v.indexOf('='));
    const paramValue: string = v.slice(v.indexOf('=') + 1);
    a[paramName] = paramValue;
    return a;
  }, {});
}

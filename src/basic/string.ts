/**
 * Generates a random UUID.
 *
 * @param randomLength - The length of the random part of the UUID.
 * @return The generated UUID.
 */
export function uuid(randomLength: number = 10): string {
  return Number(Math.random().toString().slice(2, randomLength) + Date.now()).toString(36);
}

/**
 * Generate a random string of a specified length.
 *
 * @param len - The length of the random string (default is 32)
 * @return The randomly generated string
 */
export function randomString(len: number = 32): string {
  const $chars: string = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1*** */
  const maxPos: number = $chars.length;
  let pwd: string = '';
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * Calculates the full length of a string taking into account unicode characters.
 *
 * @param {string} str - the input string to calculate the full length of
 * @return {number} the full length of the input string
 */
export const getStrFullLength = (str: string = ''): number => str.split('').reduce((pre, cur) => {
  const charCode = cur.charCodeAt(0);
  return pre + (charCode >= 0 && charCode <= 128 ? 1 : 2);
}, 0);

/**
 * A function that cuts a string based on the maximum length considering both single and double byte characters.
 *
 * @param {string} str - the input string to be processed
 * @param {number} maxLength - the maximum length the string should be cut to
 * @return {string} the resulting string after cutting based on the maxLength
 */
export const cutStrByFullLength = (str: string = '', maxLength: number): string => {
  let showLength = 0;
  return str.split('').reduce((pre, cur) => {
    const charCode = cur.charCodeAt(0);
    showLength += (charCode >= 0 && charCode <= 128) ? 1 : 2;
    return showLength <= maxLength ? pre + cur : pre;
  }, '');
};

/**
 * Check if the input string is a Chinese string.
 * @param str The input string to be checked
 * @return Whether the input string is a Chinese string
 */
export function isChinese(str: string): boolean {
  const re = /[^\u4e00-\u9fa5]/;
  return !re.test(str);
}

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

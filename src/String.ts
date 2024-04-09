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

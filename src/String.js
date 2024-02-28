/**
 * Generates a random UUID.
 *
 * @param {number} randomLength - The length of the random part of the UUID.
 * @return {string} The generated UUID.
 */
export function uuid(randomLength = 10) {
  return Number(Math.random().toString().slice(2, randomLength) + Date.now()).toString(36)
}

/**
 * Generate a random string of a specified length.
 *
 * @param {number} len - The length of the random string (default is 32)
 * @return {string} The randomly generated string
 */
export function randomString(len) {
  len = len || 32
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1*** */
  const maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

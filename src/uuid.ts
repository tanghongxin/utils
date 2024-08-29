/* eslint-disable global-require */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-bitwise */

/**
 * Generates a random UUID string based on uuid v4 proposal
 * @link https://www.rfc-editor.org/rfc/rfc9562.html#name-uuid-version-4
 *
 * @return A random UUID string in the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 */
export function uuid(): string {
  // Create a 16-byte array
  const byteArray = new Uint8Array(16);

  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(byteArray);
  } else {
    const crypto = require('crypto');
    const randomBytes = crypto.randomBytes(16);
    byteArray.set(randomBytes);
  }

  // Convert bytes to hex string
  const hexArray = Array.from(byteArray, (b) => b.toString(16).padStart(2, '0'));

  // Set UUID version and variant
  hexArray[6] = (parseInt(hexArray[6], 16) & 0x0f | 0x40).toString(16); // version 4
  hexArray[8] = (parseInt(hexArray[8], 16) & 0x3f | 0x80).toString(16); // variant 1

  // Format as standard UUID string
  return (
    `${hexArray.slice(0, 4).join('')}-${
      hexArray.slice(4, 6).join('')}-${
      hexArray.slice(6, 8).join('')}-${
      hexArray.slice(8, 10).join('')}-${
      hexArray.slice(10).join('')}`
  );
}

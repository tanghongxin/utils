/**
 * Copies the given string to the clipboard.
 *
 * @param {string} str - the string to be copied
 * @return {Promise<void>} a promise that resolves when the text is successfully copied to the clipboard
 */
export function copyText(str: string): Promise<void> {
  return navigator.clipboard.writeText(str);
}

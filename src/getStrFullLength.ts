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

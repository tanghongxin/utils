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

/**
 * Check if the input string is a Chinese string.
 * @param str The input string to be checked
 * @return Whether the input string is a Chinese string
 */
export function isChinese(str: string): boolean {
  return !/[^\u4e00-\u9fa5]/.test(str);
}

/**
 * Check if the given number is a decimal.
 *
 * @param {number} num - The number to be checked
 * @return {boolean} true if the number is a decimal, false otherwise
 */
export function isDecimal(num) {
  return !!(num % 1)
}

/**
 * Check if the input string is a valid decimal number.
 *
 * @param {string} str - The input string to be checked
 * @return {boolean} Whether the input string is a valid decimal number
 */
export function isDecimalStr(str) {
  return !isNaN(str) && isDecimal(Number(str))
}

/**
 * Format a number to a specific precision and add thousand separators.
 *
 * @param {number} val - The number to be formatted
 * @param {number} precision - The number of decimal places to round to (default is 2)
 * @return {string} The formatted number with the specified precision and thousand separators
 */
export function formatterNumberPrecision(val, precision = 2) {
  const num = Number(val)

  // 非标准数值处理
  if (isNaN(num)) {
    return val
  }

  const multiple = 10 ** precision

  // 使用 Math.round 而非直接 toFixed 进行四舍五入避免精度问题（如 2.135.toFixed(2) 得到 2.13）
  const roundedNum = Math.round(num * multiple) / multiple

  // 截取到小数位
  const fixedNumStr = roundedNum.toFixed(precision)

  // 分拆整数、小数
  const [integerNum, decimalNum] = fixedNumStr.split('.')

  // 整数增加千分位
  return `${Number(integerNum).toLocaleString('zh-CN')}.${decimalNum}`
}

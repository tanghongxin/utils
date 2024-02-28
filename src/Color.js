/**
 * Converts a hexadecimal color code to its RGBA equivalent.
 *
 * @param {string} hex - the hexadecimal color code to convert
 * @param {number} [alpha=1] - the alpha value for the RGBA color (optional, default is 1)
 * @return {string} the RGBA equivalent of the input hexadecimal color code
 */
export function hexToRGBA(hex, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

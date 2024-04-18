/**
 * Converts a hexadecimal color code to its RGBA equivalent.
 *
 * @param hex - the hexadecimal color code to convert
 * @param alpha - the alpha value for the RGBA color (optional, default is 1)
 * @return the RGBA equivalent of the input hexadecimal color code
 */
export function hexToRGBA(hex: string, alpha: number = 1): string {
  const r: number = parseInt(hex.slice(1, 3), 16);
  const g: number = parseInt(hex.slice(3, 5), 16);
  const b: number = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

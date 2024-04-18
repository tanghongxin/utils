/**
 * Check if the value is a symbol.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a symbol, otherwise returns false.
 */
export const isSymbol = (val: unknown): boolean => typeof val === 'symbol';

/**
 * Clamp a value between a minimum and maximum value.
 *
 * @param value - The value to be clamped
 * @param min - The minimum value that `value` can be
 * @param max - The maximum value that `value` can be
 * @return The clamped value between `min` and `max`
 */
export function clamp(value: number, min: number, max: number): number {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value);
}

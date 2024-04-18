/**
 * Executes the callback immediately and then sets up a recurring interval to call the callback function.
 *
 * @param cb - The callback function to be executed.
 * @param ms - The time interval for the recurring callback.
 * @param argus - The arguments to be passed to the callback function.
 * @return The ID value that uniquely identifies the interval.
*/
export function immediateInterval(cb: Function, ms: number, ...argus: any[]): number {
  cb(...argus);
  return setInterval(cb, ms, ...argus);
}

/**
 * Pause execution for a specified number of milliseconds.
 *
 * @param ms - The number of milliseconds to pause execution.
 * @return A promise that resolves after the specified number of milliseconds.
 */
export const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

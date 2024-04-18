/**
 * Check if the current platform is a Windows operating system.
 *
 * @return true if the platform is Windows, false otherwise
 */
export function isWin(): boolean {
  return /^Win/.test(navigator.platform);
}

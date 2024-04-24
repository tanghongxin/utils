/**
 * Check if the user agent indicates that the browser is WeChat.
 *
 * @return true if the user agent indicates that the browser is WeChat, false otherwise
 */
export function isWX(): boolean {
  const ua: string = navigator.userAgent.toLowerCase();
  return ua.includes('micromessenger');
}

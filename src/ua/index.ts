import {
  WIN_REGEX,
  MOBILE_REGEX,
} from '../basic/regex';

/**
 * Check if the user agent indicates that the browser is WeChat.
 *
 * @return true if the user agent indicates that the browser is WeChat, false otherwise
 */
export function isWX(): boolean {
  const ua: string = navigator.userAgent.toLowerCase();
  return ua.includes('micromessenger');
}

/**
 * Check if the current platform is a Windows operating system.
 *
 * @return true if the platform is Windows, false otherwise
 */
export function isWin(): boolean {
  return WIN_REGEX.test(navigator.platform);
}

/**
 * Checks if the browser is Internet Explorer.
 *
 * @return true if the browser is Internet Explorer, false otherwise
 */
export function isIE(): boolean {
  const bw: string = window.navigator.userAgent;
  const compare = (s: string) => bw.indexOf(s) >= 0;
  const ie11 = (() => 'ActiveXObject' in window)();
  return compare('MSIE') || ie11;
}

/**
 * Function to detect the type of device based on the user agent.
 *
 * @return The type of device, either 'Mobile' or 'Desktop'
 */
export function detectDeviceType(): string {
  return MOBILE_REGEX.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
}

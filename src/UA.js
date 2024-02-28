import {
  WIN_REGEX,
  MOBILE_REGEX,
} from './Regex'

/**
 * Check if the user agent indicates that the browser is WeChat.
 *
 * @return {boolean} true if the user agent indicates that the browser is WeChat, false otherwise
 */
export function isWX() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('micromessenger')
}

/**
 * Check if the current platform is a Windows operating system.
 *
 * @return {boolean} true if the platform is Windows, false otherwise
 */
export function isWin() {
  return WIN_REGEX.test(navigator.platform)
}

/**
 * Checks if the browser is Internet Explorer.
 *
 * @return {boolean} true if the browser is Internet Explorer, false otherwise
 */
export function isIE() {
  const bw = window.navigator.userAgent
  const compare = (s) => bw.indexOf(s) >= 0
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}

/**
 * Function to detect the type of device based on the user agent.
 *
 * @return {string} The type of device, either 'Mobile' or 'Desktop'
 */
export function detectDeviceType() {
  return MOBILE_REGEX.test(
    navigator.userAgent,
  )
    ? 'Mobile'
    : 'Desktop'
}

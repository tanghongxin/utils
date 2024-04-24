/**
 * Checks if the browser is Internet Explorer.
 *
 * @return true if the browser is Internet Explorer, false otherwise
 */
export function isIE(): boolean {
  const { userAgent } = window.navigator;
  const isIElt11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;

  return isIElt11 || isIE11;
}

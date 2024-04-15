import { isNum } from '../basic';

/**
 * Scrolls to the given coordinates.
 *
 * @param {object} options - The options object.
 * @param {function} options.getContainer - The function to get the container element.
 * @param {number} options.left - The left coordinate.
 * @param {number} options.top - The top coordinate.
 * @return {void}
 */
export function scrollTo(options: { getContainer?: () => HTMLElement; left?: number; top?: number; }): void {
  const getContainer = options.getContainer || (() => document.body);
  const container = getContainer();
  const currentLeft: number = container.scrollLeft;
  const currentTop: number = container.scrollTop;
  const left: number = isNum(options.left) ? options.left : currentLeft;
  const top: number = isNum(options.top) ? options.top : currentTop;

  if (currentLeft !== left || currentTop !== top) {
    window.requestAnimationFrame(() => {
      scrollTo({ ...options, left, top });
    });
    container.scrollTo(currentLeft + (left - currentLeft) / 8, currentTop + (top - currentTop) / 8);
  }
}

/**
 * Toggles the full screen mode of the document.
 *
 * @return
 */
export function toggleFullScreen(): void {
  const doc: Document = window.document;

  if (
    !doc.fullscreenElement
    && !doc.mozFullScreenElement
    && !doc.webkitFullscreenElement
    && !doc.msFullscreenElement) {
    doc.documentElement.requestFullscreen();
  } else {
    doc.exitFullscreen();
  }
}

/**
 * Copies the given string to the clipboard.
 *
 * @param str - the string to be copied
 * @return
 */
export function copy(str: string): void {
  const el: HTMLTextAreaElement = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'fixed';
  el.style.left = '-9999px';
  el.style.top = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

/**
 * Triggers a window resize event.
 */
export function triggerWindowResizeEvent(): void {
  window.dispatchEvent(new Event('resize'));
}

/**
 * Sets the document title and triggers a force refresh in WeChat environment.
 *
 * @param {string} title - The new title for the document.
 */
export function setDocumentTitle(title: string) {
  document.title = title;
  const ua = navigator.userAgent;
  const regex = /\bMicroMessenger\/([\d.]+)/;
  const isWechat = regex.test(ua) && /ip(hone|od|ad)/i.test(ua);
  // 微信环境触发强制刷新
  if (isWechat) {
    const i = document.createElement('iframe');
    i.src = 'about:blank';
    i.style.display = 'none';
    document.body.appendChild(i);
    requestAnimationFrame(() => i.remove());
  }
}

/**
 * Returns an object containing the parameters of the given URL.
 *
 * @param url The URL to be parsed, of type `string`.
 *
 * @returns An object containing the parameters of the URL, of type `{ [key: string]: string }`.
 */
export function getURLParameters(url: string): { [key: string]: string } {
  const searchParams: string[] = (url.match(/([^?=&]+)(=([^&]*))/g) || []);
  return searchParams.reduce((a: { [key: string]: string }, v: string) => {
    const paramName: string = v.slice(0, v.indexOf('='));
    const paramValue: string = v.slice(v.indexOf('=') + 1);
    a[paramName] = paramValue;
    return a;
  }, {});
}

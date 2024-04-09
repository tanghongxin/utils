/**
 * Scrolls the page to the top when called.
 *
 * @return
 */
export function scrollToTop(): void {
  const c: number = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
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

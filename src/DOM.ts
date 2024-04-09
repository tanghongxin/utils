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

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    doc.documentElement.requestFullscreen();
  } else {
    doc.exitFullscreen();
  }
}

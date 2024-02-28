/**
 * Scrolls the page to the top when called.
 *
 * @return {void} 
 */
export function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

/**
 * Toggles the full screen mode of the document.
 *
 * @return {void} 
 */
export function toggleFullScreen() {
  const doc = window.document

  // eslint-disable-next-line max-len
  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    doc.documentElement.requestFullscreen()
  } else {
    doc.exitFullscreen()
  }
}

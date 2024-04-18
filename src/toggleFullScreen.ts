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

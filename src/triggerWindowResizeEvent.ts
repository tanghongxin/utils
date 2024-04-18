/**
 * Triggers a window resize event.
 */
export function triggerWindowResizeEvent(): void {
  window.dispatchEvent(new Event('resize'));
}

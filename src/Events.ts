/**
 * Triggers a window resize event.
 */
export function triggerWindowResizeEvent(): void {
  window.dispatchEvent(new Event('resize'));
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

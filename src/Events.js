/**
 * Triggers a window resize event.
 *
 */
export function triggerWindowResizeEvent() {
  window.dispatchEvent(new Event('resize'))
}

/**
 * Copies the given string to the clipboard.
 *
 * @param {string} str - the string to be copied
 * @return {void} 
 */
export function copy(str) {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'fixed'
  el.style.left = '-9999px'
  el.style.top = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

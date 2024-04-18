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

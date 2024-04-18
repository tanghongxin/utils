import { isNum } from './isNum';

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

/**
 * Checks if the scrolling of an HTML element has completed.
 *
 * @param el - The HTML element to check for scroll completion.
 * @returns A promise that resolves when the scrolling has completed.
 */
export function checkScrollCompletion(el: HTMLElement) {
  return new Promise<void>((resolve) => {
    let lastPos: number | undefined;
    let same = 0;

    function innerCheck() {
      const { top: newPos } = el.getBoundingClientRect();
      // https://stackoverflow.com/questions/46795955/how-to-know-scroll-to-element-is-done-in-javascript
      if (lastPos === newPos && same++ > 0) {
        resolve();
      } else {
        lastPos = newPos;
        requestAnimationFrame(innerCheck);
      }
    }

    requestAnimationFrame(innerCheck);
  });
}

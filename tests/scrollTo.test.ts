import { scrollTo } from '../src';

// https://github.com/jsdom/jsdom/issues/2751
describe.skip('scrollTo', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('Scroll to specific coordinates', () => {
    const left = 100;
    const top = 200;

    scrollTo({ getContainer: () => container, left, top });

    expect(container.scrollLeft).toBe(left);
    expect(container.scrollTop).toBe(top);
  });

  test('Scroll to current coordinates if not provided', () => {
    const currentLeft = 50;
    const currentTop = 150;
    container.scrollLeft = currentLeft;
    container.scrollTop = currentTop;

    scrollTo({ getContainer: () => container });

    expect(container.scrollLeft).toBe(currentLeft);
    expect(container.scrollTop).toBe(currentTop);
  });

  test('Recursively scroll to target coordinates', () => {
    const left = 500;
    const top = 800;

    scrollTo({ getContainer: () => container, left, top });

    expect(container.scrollLeft).toBeLessThan(left);
    expect(container.scrollTop).toBeLessThan(top);
  });
});

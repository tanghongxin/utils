import { triggerWindowResizeEvent } from '../src';

test('Trigger a window resize event', () => {
  const mockEvent = new Event('resize');
  const mockDispatchEvent = vi.fn();
  window.dispatchEvent = mockDispatchEvent;

  triggerWindowResizeEvent();

  expect(mockDispatchEvent).toHaveBeenCalledWith(mockEvent);
});

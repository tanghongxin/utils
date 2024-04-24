import { toggleFullScreen } from '../src';

test('Toggle full screen mode', () => {
  const mockDocument = {
    documentElement: {
      requestFullscreen: vi.fn(),
    },
    exitFullscreen: vi.fn(),
    fullscreenElement: null,
    mozFullScreenElement: null,
    webkitFullscreenElement: null,
    msFullscreenElement: null,
  };

  global.document = mockDocument as Document;

  toggleFullScreen();
  expect(mockDocument.documentElement.requestFullscreen).toHaveBeenCalled();

  mockDocument.fullscreenElement = document.documentElement;
  toggleFullScreen();
  expect(mockDocument.exitFullscreen).toHaveBeenCalled();

  mockDocument.mozFullScreenElement = document.documentElement;
  toggleFullScreen();
  expect(mockDocument.exitFullscreen).toHaveBeenCalled();

  mockDocument.webkitFullscreenElement = document.documentElement;
  toggleFullScreen();
  expect(mockDocument.exitFullscreen).toHaveBeenCalled();

  mockDocument.msFullscreenElement = document.documentElement;
  toggleFullScreen();
  expect(mockDocument.exitFullscreen).toHaveBeenCalled();
});

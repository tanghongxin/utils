import { saveFile } from '../src';

// https://github.com/jsdom/jsdom/issues/1721
test.skip('Save content to a file', () => {
  const content = 'Hello, world!';
  const fileName = 'output.txt';

  // Mock the global `window` object
  const mockWindow = {
    URL: {
      createObjectURL: vi.fn(),
    },
    navigator: {
      msSaveBlob: vi.fn(),
    },
    Blob: vi.fn(),
  };

  // Mock the global `document` object
  const mockDocument = {
    createElement: vi.fn().mockReturnValue({
      click: vi.fn(),
    }),
  };

  // Mock the global `window` and `document` objects
  const originalWindow = global.window;
  const originalDocument = global.document;
  global.window = mockWindow as Window;
  global.document = mockDocument as Document;

  saveFile(content, fileName);

  expect(mockWindow.URL.createObjectURL).toBeCalledWith(expect.any(Blob));
  expect(mockDocument.createElement).toBeCalledWith('a');
  expect(mockDocument.createElement().click).toBeCalled();

  // Restore the original `window` and `document` objects
  global.window = originalWindow;
  global.document = originalDocument;
});

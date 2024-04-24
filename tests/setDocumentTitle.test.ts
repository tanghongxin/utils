import { setDocumentTitle } from '../src';

test('Set document title and trigger force refresh in WeChat environment', () => {
  const originalDocumentTitle = document.title;
  const newTitle = 'New Document Title';

  Object.defineProperty(document, 'title', {
    writable: true,
    value: originalDocumentTitle,
  });

  setDocumentTitle(newTitle);

  expect(document.title).toBe(newTitle);
});

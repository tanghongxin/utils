import { download } from './download';

/**
 * Saves the provided content to a file with the specified file name.
 *
 * @param {any} content - The content to be saved to the file
 * @param {string} fileName - The name of the file to save the content as
 * @return {void}
 */
export function saveFile(content: any, fileName: string): void {
  const blob = new Blob([content]);
  const url = URL.createObjectURL(blob);
  download(url, fileName);
  setTimeout(() => {
    URL.revokeObjectURL(url);
  });
}

/**
 * Downloads a file from the given URL with the specified file name.
 *
 * @param url - The URL of the file to download
 * @param fileName - The name to save the downloaded file as
 * @return
 */
export function download(url: string, fileName: string): void {
  const link: HTMLAnchorElement = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

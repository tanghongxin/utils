/**
 * Converts a file to base64 encoding.
 *
 * @param file - The file to be converted to base64.
 * @return A promise that resolves with the base64 encoded data of the file.
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader: FileReader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Converts a file to a Blob object.
 *
 * @param file - The file to be converted to a Blob.
 * @return A Promise that resolves with the Blob object.
 */
export function fileToBlob(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader: FileReader = new FileReader();
    reader.onloadend = () => resolve(new Blob([reader.result as ArrayBuffer], { type: file.type }));
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

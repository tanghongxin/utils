/**
 * Convert a blob to base64.
 *
 * @param blob - The blob to be converted to base64.
 * @return A promise that resolves to the base64 representation of the input blob.
 */
export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader: FileReader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

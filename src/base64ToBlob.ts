/**
 * Converts a base64 string to a Blob object.
 *
 * @param base64 - the base64 string to convert
 * @return the Blob object converted from the base64 string
 */
export function base64ToBlob(base64: string): Blob {
  const arr: string[] = base64.split(',');
  const mime: string = arr[0].match(/:(.*?)/)[1];
  const bstr: string = atob(arr[1]);
  let n: number = bstr.length;
  const u8arr: Uint8Array = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

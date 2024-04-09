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

/**
 * Create a new File object from the provided blob and file name.
 *
 * @param blob - The blob to be converted to a File object
 * @param fileName - The name of the file
 * @return The new File object created from the blob and file name
 */
export function blobToFile(blob: Blob, fileName: string): File {
  return new File([blob], fileName);
}

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

/**
 * Converts a base64 string to a File object with the specified file name.
 *
 * @param base64String - The base64 string to convert
 * @param fileName - The name of the file
 * @return The File object created from the base64 string
 */
export function base64ToFile(base64String: string, fileName: string): File {
  const blob: Blob = base64ToBlob(base64String);
  return new File([blob], fileName);
}

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

/**
 * Returns a human-readable file size.
 *
 * @param size - The size of the file in bytes
 * @return A formatted string representing the file size
 */
export function prettyFileSize(size: number): string {
  const units: string[] = ['TB', 'GB', 'MB', 'KB'];
  let unit: string = 'Bytes';
  while (size >= 1024 && units.length) {
    size /= 1024;
    unit = units.pop()!;
  }
  return `${Math.floor(100 * size) / 100} ${unit}`;
}

/**
 * Calculate the percentage of a given value.
 *
 * @param value - the value to calculate the percentage of
 * @param decimal - the number of decimal places to round the percentage to (default is 2)
 * @return the formatted percentage value
 */
export function percentage(value: number, decimal: number = 2): string {
  return `${(value * 100).toFixed(decimal)}%`;
}

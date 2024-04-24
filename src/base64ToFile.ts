import { base64ToBlob } from './base64ToBlob';

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

/**
 * Downloads a file from the given URL with the specified file name.
 *
 * @param {string} url - The URL of the file to download
 * @param {string} fileName - The name to save the downloaded file as
 * @return {void} 
*/
export function download(url, fileName) {
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * Convert a blob to base64.
 *
 * @param {Blob} blob - The blob to be converted to base64.
 * @return {Promise} A promise that resolves to the base64 representation of the input blob.
 */
export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

/**
 * Create a new File object from the provided blob and file name.
 *
 * @param {Blob} blob - The blob to be converted to a File object
 * @param {string} fileName - The name of the file
 * @return {File} The new File object created from the blob and file name
 */
export function blobToFile(blob, fileName) {
  return new File([blob], fileName)
}

/**
 * Converts a base64 string to a Blob object.
 *
 * @param {string} base64 - the base64 string to convert
 * @return {Blob} the Blob object converted from the base64 string
 */
export function base64ToBlob(base64) {
  const arr = base64.split(',')
  const mime = arr[0].match(/:(.*?)/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

/**
 * Converts a base64 string to a File object with the specified file name.
 *
 * @param {string} base64String - The base64 string to convert
 * @param {string} fileName - The name of the file
 * @return {File} The File object created from the base64 string
 */
export function base64ToFile(base64String, fileName) {
  const blob = base64ToBlob(base64String)
  return new File([blob], fileName)
}

/**
 * Converts a file to base64 encoding.
 *
 * @param {File} file - The file to be converted to base64.
 * @return {Promise} A promise that resolves with the base64 encoded data of the file.
 */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

/**
 * Converts a file to a Blob object.
 *
 * @param {File} file - The file to be converted to a Blob.
 * @return {Promise<Blob>} A Promise that resolves with the Blob object.
 */
export function fileToBlob(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(new Blob([reader.result], { type: file.type }))
    reader.onerror = reject
    reader.readAsArrayBuffer(file)
  })
}

/**
 * Returns a human-readable file size.
 *
 * @param {number} size - The size of the file in bytes
 * @return {string} A formatted string representing the file size
 */
export function prettyFileSize(size) {
  const units = ['TB', 'GB', 'MB', 'KB']
  let unit = 'Bytes'
  while (size >= 1024 && units.length) {
    size /= 1024
    unit = units.pop()
  }
  return `${Math.floor(100 * size) / 100} ${unit}`
}

/**
 * Calculate the percentage of a given value.
 *
 * @param {number} value - the value to calculate the percentage of
 * @param {number} decimal - the number of decimal places to round the percentage to (default is 2)
 * @return {string} the formatted percentage value
 */
export function percentage(value, decimal = 2) {
  return `${(value * 100).toFixed(decimal)}%`
}

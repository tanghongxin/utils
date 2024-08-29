/// <reference path="./types/index.d.ts" />

/**
 * Converts a base64 string to a Blob object.
 *
 * @param base64 - the base64 string to convert
 * @return the Blob object converted from the base64 string
 */
export declare function base64ToBlob(base64: string): Blob;

/**
 * Converts a base64 string to a File object with the specified file name.
 *
 * @param base64String - The base64 string to convert
 * @param fileName - The name of the file
 * @return The File object created from the base64 string
 */
export declare function base64ToFile(base64String: string, fileName: string): File;

/**
 * Convert a blob to base64.
 *
 * @param blob - The blob to be converted to base64.
 * @return A promise that resolves to the base64 representation of the input blob.
 */
export declare function blobToBase64(blob: Blob): Promise<string>;

/**
 * Chunks an array into smaller arrays of a specified size.
 *
 * @param arr The array to be chunked, of type `T[]`.
 * @param size The size of each chunk, of type `number`.
 * @return An array of arrays of type `T[][]`.
 */
export declare function chunk<T>(arr: T[], size: number): T[][];

/**
 * Clamp a value between a minimum and maximum value.
 *
 * @param value - The value to be clamped
 * @param min - The minimum value that `value` can be
 * @param max - The maximum value that `value` can be
 * @return The clamped value between `min` and `max`
 */
export declare function clamp(value: number, min: number, max: number): number;

/**
 * Copies the given string to the clipboard.
 *
 * @param {string} str - the string to be copied
 * @return {Promise<void>} a promise that resolves when the text is successfully copied to the clipboard
 */
export declare function copyText(str: string): Promise<void>;

/**
 * A function that cuts a string based on the maximum length considering both single and double byte characters.
 *
 * @param {string} str - the input string to be processed
 * @param {number} maxLength - the maximum length the string should be cut to
 * @return {string} the resulting string after cutting based on the maxLength
 */
export declare const cutStrByFullLength: (str: string, maxLength: number) => string;

/**
 * Returns a debounced function that delays invoking the input function until after `delay` milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @param func - The function to be invoked after `delay` milliseconds have elapsed since the last time the debounced function was invoked.
 * @param delay - The number of milliseconds to delay before invoking the `func`.
 * @return - Returns the debounced function.
 */
export declare function debounce(func: Function, delay: number): Function;

/**
 * Downloads a file from the given URL with the specified file name.
 *
 * @param url - The URL of the file to download
 * @param fileName - The name to save the downloaded file as
 * @return
 */
export declare function download(url: string, fileName: string): void;

/**
 * Converts a file to base64 encoding.
 *
 * @param file - The file to be converted to base64.
 * @return A promise that resolves with the base64 encoded data of the file.
 */
export declare function fileToBase64(file: File): Promise<string>;

/**
 * Converts a file to a Blob object.
 *
 * @param file - The file to be converted to a Blob.
 * @return A Promise that resolves with the Blob object.
 */
export declare function fileToBlob(file: File): Promise<Blob>;

/**
 * Format the given date according to the specified format.
 *
 * @param date - The date to format
 * @param format - The format string for the output
 * @return The formatted string
 */
export declare function formatDate(date: Date | number, format: string): string;

/**
 * Returns a human-readable file size.
 *
 * @param size - The size of the file in bytes
 * @param precision - The number of decimal places to round to (default is 2)
 * @return A formatted string representing the file size
 */
export declare function formatFileSize(size: number, precision?: number): string;

/**
 * Format a number to a specific precision.
 *
 * @param {number} num - The number to be formatted
 * @param {number} precision - The number of decimal places to round to (default is 2)
 * @param {string} locals - An optional parameter specifying the locale for number formatting
 * @return {string} The formatted number with the specified precision and thousand separators
 */
export declare function formatNumberPrecision(num: number, precision?: number, locals?: string): string;

/**
 * Calculates the full length of a string taking into account unicode characters.
 *
 * @param {string} str - the input string to calculate the full length of
 * @return {number} the full length of the input string
 */
export declare const getStrFullLength: (str?: string) => number;

export declare const getTag: (value: unknown) => string;

/**
 * Returns an object containing the parameters of the given URL.
 *
 * @param url The URL to be parsed, of type `string`.
 *
 * @returns An object containing the parameters of the URL, of type `{ [key: string]: string }`.
 */
export declare function getURLParameters(url: string): {
    [key: string]: string;
};

/**
 * Converts a hexadecimal color code to its RGBA equivalent.
 *
 * @param hex - the hexadecimal color code to convert
 * @param alpha - the alpha value for the RGBA color (optional, default is 1)
 * @return the RGBA equivalent of the input hexadecimal color code
 */
export declare function hexToRGBA(hex: string, alpha?: number): string;

/**
 * Executes the callback immediately and then sets up a recurring interval to call the callback function.
 *
 * @param cb - The callback function to be executed.
 * @param ms - The time interval for the recurring callback.
 * @param argus - The arguments to be passed to the callback function.
 * @return The ID value that uniquely identifies the interval.
 */
export declare function immediateInterval(cb: Function, ms: number, ...argus: any[]): number;

/**
 * Check if the input string is a Chinese string.
 * @param str The input string to be checked
 * @return Whether the input string is a Chinese string
 */
export declare function isChinese(str: string): boolean;

/**
 * Check if the value is a Date object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a Date object, otherwise returns false.
 */
export declare const isDate: (val: unknown) => val is Date;

/**
 * Validates the format and value of a date string.
 *
 * @param dateStr - The date string to be validated (format: YYYY/MM/DD).
 * @return true if the date string is valid, false otherwise.
 */
export declare function isDateStr(dateStr: string): boolean;

/**
 * Validates the format and value of a date string.
 *
 * @param dateStr - The date string to be validated (format: YYYY/MM/DD).
 * @return true if the date string is valid, false otherwise.
 */
export declare function isDateStr(dateStr: string): boolean;

/**
 * Check if the given number is a decimal.
 *
 * @param num - The number to be checked
 * @return true if the number is a decimal, false otherwise
 */
export declare function isDecimal(num: number): boolean;

/**
 * Check if the input value is empty based on its type.
 *
 * @param val - The value to be checked for emptiness
 * @return true if the value is empty, false otherwise
 */
export declare function isEmpty(value: unknown): boolean;

/**
 * Check if the value is a function.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a function, otherwise returns false.
 */
export declare const isFunction: (val: unknown) => val is Function;

/**
 * Checks if the browser is Internet Explorer.
 *
 * @return true if the browser is Internet Explorer, false otherwise
 */
export declare function isIE(): boolean;

/**
 * Check if the value is a Map object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a Map object, otherwise returns false.
 */
export declare const isMap: (val: unknown) => val is Map<any, any>;

/**
 * Check if the value is a number.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a number, otherwise returns false.
 */
export declare const isNum: (val: unknown) => val is number;

/**
 * Check if the value is an object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is an object, otherwise returns false.
 */
export declare const isObject: (val: unknown) => val is object;

/**
 * Check if the given object is a Promise.
 *
 * @param {any} obj - The object to be checked
 * @return {boolean} Whether the object is a Promise or not
 */
export declare const isPromise: <T extends unknown = unknown>(val: unknown) => val is Promise<any>;

/**
 * Check if the value is a RegExp object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a RegExp object, otherwise returns false.
 */
export declare const isRegExp: (val: unknown) => val is RegExp;

/**
 * Check if the value is a Set object.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a Set object, otherwise returns false.
 */
export declare const isSet: (val: unknown) => val is Set<any>;

/**
 * Check if the value is a string.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a string, otherwise returns false.
 */
export declare const isString: (val: unknown) => val is string;

/**
 * Check if the value is a symbol.
 * @param {unknown} val - The value to be checked.
 * @returns {boolean} - Returns true if the value is a symbol, otherwise returns false.
 */
export declare const isSymbol: (val: unknown) => val is symbol;

/**
 * Check if the current platform is a Windows operating system.
 *
 * @return true if the platform is Windows, false otherwise
 */
export declare function isWin(): boolean;

/**
 * Check if the user agent indicates that the browser is WeChat.
 *
 * @return true if the user agent indicates that the browser is WeChat, false otherwise
 */
export declare function isWX(): boolean;

/**
 * Generates a random Date object within the past 10 billion milliseconds.
 *
 * @return {Date} A random Date object.
 */
export declare function randomDate(): Date;

/**
 * Generate a random string of a specified length.
 *
 * @param len - The length of the random string (default is 32)
 * @return The randomly generated string
 */
export declare function randomString(len?: number): string;

/**
 * Removes the keep alive cache for the given Vue instance.
 *
 * @param vm - The Vue instance to remove the keep alive cache for.
 * @return
 */
export declare function removeKeepAliveCache(vm: any): void;

/**
 * Saves the provided content to a file with the specified file name.
 *
 * @param {any} content - The content to be saved to the file
 * @param {string} fileName - The name of the file to save the content as
 * @return {void}
 */
export declare function saveFile(content: any, fileName: string): void;

/**
 * Scrolls to the given coordinates.
 *
 * @param {object} options - The options object.
 * @param {function} options.getContainer - The function to get the container element.
 * @param {number} options.left - The left coordinate.
 * @param {number} options.top - The top coordinate.
 * @return {void}
 */
declare function scrollTo_2(options: {
    getContainer?: () => HTMLElement;
    left?: number;
    top?: number;
}): void;
export { scrollTo_2 as scrollTo }

/**
 * Sets the document title and triggers a force refresh in WeChat environment.
 *
 * @param {string} title - The new title for the document.
 */
export declare function setDocumentTitle(title: string): void;

/**
 * Randomizes the order of the values of an array, returning a new array.
 * @param arr The array to be shuffled, of type `T[]`.
 * @returns A new array with the same elements as `arr` but in a random order, of type `T[]`.
 */
export declare function shuffle<T>(arr: T[]): T[];

/**
 * Pause execution for a specified number of milliseconds.
 *
 * @param ms - The number of milliseconds to pause execution.
 * @return A promise that resolves after the specified number of milliseconds.
 */
export declare const sleep: (ms: number) => Promise<void>;

/**
 * Converts a string to camelCase, with the first letter of each word except the first capitalized and no spaces.
 * @param str The input string to be converted, may be any type.
 * @return The resulting camelCase string. If the input is not a string, the result will be the empty string.
 */
export declare function toCamelCase(str: string): string;

/**
 * Toggles the full screen mode of the document.
 *
 * @return
 */
export declare function toggleFullScreen(): void;

/**
 * Converts a string to kebab-case, with all words separated by hyphens.
 * @param str The input string to be converted, may be any type.
 * @return The resulting kebab-case string. If the input is not a string, the result will be the empty string.
 */
export declare function toKebabCase(str: string): string;

/**
 * Triggers a window resize event.
 */
export declare function triggerWindowResizeEvent(): void;

/**
 * Generates a new array with unique elements.
 *
 * @param {Array} arr - The input array
 * @return {Array} A new array with unique elements
 */
export declare function uniq<T>(arr: T[]): T[];

/**
 * Generates a random UUID string based on uuid v4 proposal
 * @link https://www.rfc-editor.org/rfc/rfc9562.html#name-uuid-version-4
 *
 * @return A random UUID string in the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 */
export declare function uuid(): string;

export { }

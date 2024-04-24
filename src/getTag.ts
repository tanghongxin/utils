const objectToString = Object.prototype.toString;

export const getTag = (value: unknown): string => objectToString.call(value);

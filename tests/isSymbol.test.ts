import { isSymbol } from '../src';

test('Returns true if the value is a symbol', () => {
  const symbolValue = Symbol('test');
  expect(isSymbol(symbolValue)).toBe(true);
});

test('Returns false if the value is not a symbol', () => {
  expect(isSymbol('symbol')).toBe(false);
  expect(isSymbol(123)).toBe(false);
  expect(isSymbol(true)).toBe(false);
  expect(isSymbol([])).toBe(false);
  expect(isSymbol({})).toBe(false);
  expect(isSymbol(null)).toBe(false);
  expect(isSymbol(undefined)).toBe(false);
});

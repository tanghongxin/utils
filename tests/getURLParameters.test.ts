import { getURLParameters } from '../src';

test('Parse URL with no parameters', () => {
  const url = 'https://example.com';
  const params = getURLParameters(url);
  expect(params).toEqual({});
});

test('Parse URL with query parameters', () => {
  const url = 'https://example.com?name=John&age=30';
  const params = getURLParameters(url);
  expect(params).toEqual({ name: 'John', age: '30' });
});

test('Parse URL with multiple query parameters', () => {
  const url = 'https://example.com?name=John&age=30&city=New+York';
  const params = getURLParameters(url);
  expect(params).toEqual({ name: 'John', age: '30', city: 'New York' });
});

test('Parse URL with empty query parameter values', () => {
  const url = 'https://example.com?name=&age=30&city=New+York';
  const params = getURLParameters(url);
  expect(params).toEqual({ name: '', age: '30', city: 'New York' });
});

test('Parse URL with special characters in query parameter values', () => {
  const url = 'https://example.com?name=John+Doe&message=Hello%20World';
  const params = getURLParameters(url);
  expect(params).toEqual({ name: 'John Doe', message: 'Hello World' });
});

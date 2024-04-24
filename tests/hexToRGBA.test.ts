import { hexToRGBA } from '../src';

test('Convert hexadecimal color code to RGBA', () => {
  const hex = '#FF0000';
  const alpha = 0.5;
  const expectedRGBA = 'rgba(255, 0, 0, 0.5)';

  const result = hexToRGBA(hex, alpha);
  expect(result).toBe(expectedRGBA);
});

test('Convert hexadecimal color code to RGBA with default alpha value', () => {
  const hex = '#00FF00';
  const expectedRGBA = 'rgba(0, 255, 0, 1)';

  const result = hexToRGBA(hex);
  expect(result).toBe(expectedRGBA);
});

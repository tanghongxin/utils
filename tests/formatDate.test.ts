import { formatDate } from '../src';

test('Format timestamp with default format', () => {
  const timestamp = 1628457200000;
  const formattedTimestamp = formatDate(timestamp, 'yyyy-MM-dd HH:mm:ss');
  expect(formattedTimestamp).toBe('2021-08-09 05:13:20');
});

test('Format timestamp with custom format', () => {
  const timestamp = 1628457200000;
  const formattedTimestamp = formatDate(timestamp, 'dd/MM/yyyy HH:mm:ss');
  expect(formattedTimestamp).toBe('09/08/2021 05:13:20');
});

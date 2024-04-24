import { sleep } from '../src';

test('Pause execution for a specified number of milliseconds', async () => {
  const startTime = Date.now();
  await sleep(1000);
  const endTime = Date.now();

  expect(endTime - startTime).toBeGreaterThanOrEqual(1000);
});

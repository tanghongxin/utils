import { randomDate } from '../src';

describe('randomDate', () => {
  it('should return a Date object', () => {
    const date = randomDate();
    expect(date).toBeInstanceOf(Date);
  });

  it('should return a date within the past 10 billion milliseconds', () => {
    const date = randomDate();
    const now = new Date();
    const difference = now.getTime() - date.getTime();
    expect(difference).toBeGreaterThanOrEqual(0);
    expect(difference).toBeLessThan(10000000000);
  });
});

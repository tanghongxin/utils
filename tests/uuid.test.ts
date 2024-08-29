import { uuid } from '../src/uuid';

describe('generateUUID', () => {
  it('should generate a valid UUID v4', () => {
    const id = uuid();

    // UUID v4 format should be xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    expect(id).toMatch(uuidRegex);
  });

  it('should generate unique UUIDs', () => {
    const uuids = new Set<string>();

    for (let i = 0; i < 1000; i++) {
      uuids.add(uuid());
    }

    expect(uuids.size).toBe(1000);
  });
});

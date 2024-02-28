import { expect, test } from 'vitest'
import { isEmpty } from '../src/Boolean'

test('NaN is empty', () => {
  expect(isEmpty(NaN)).toBe(true)
})
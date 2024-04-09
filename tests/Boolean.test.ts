import { expect, test } from 'vitest'
import { isEmpty } from '../src'

test('NaN is empty', () => {
  expect(isEmpty(NaN)).toBe(true)
})
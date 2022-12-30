import { describe, it, expect } from 'vitest'
import Line from './line'

describe('Line.empty', () => {
  it('returns empty line with length n', () => {
    expect(Line.empty(3)).toEqual([null, null, null])
  })
})

describe('Line.isCompleted', () => {
  it('returns false when line empty', () => {
    expect(Line.isCompleted([null, null, null])).toEqual(false)
  })

  it('returns false when line not completed', () => {
    expect(Line.isCompleted(['1', '1', '2'])).toEqual(false)
  })

  it('returns true when line completed', () => {
    expect(Line.isCompleted(['1', '1', '1'])).toEqual(true)
  })
})

describe('Line.isFull', () => {
  it('returns false when empty cell exists', () => {
    expect(Line.isFull(['1', null, '2'])).toEqual(false)
  })

  it('returns true when empty cell exists', () => {
    expect(Line.isFull(['1', '2', '2'])).toEqual(true)
  })
})

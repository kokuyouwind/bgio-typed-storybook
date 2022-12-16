import { describe, it, expect } from 'vitest'
import Util from './index'

describe('Util.range', () => {
  it('return 0 to n array when one parameter specified', () => {
    expect(Util.range(3)).toEqual([0, 1, 2])
  })

  it('return empty array if from and to equals', () => {
    expect(Util.range(5, 5)).toEqual([])
  })

  it('return number array between from and to', () => {
    expect(Util.range(2, 5)).toEqual([2, 3, 4])
  })

  it('return desc order array between to and from', () => {
    expect(Util.range(5, 2)).toEqual([5, 4, 3])
  })
})

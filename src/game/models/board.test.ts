import { describe, it, expect } from 'vitest'
import Board from './board'

describe('Board.empty', () => {
  it('should return empty cells', () => {
    expect(Board.empty).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])
  })
})

describe('Board.lines', () => {
  it('should return all lines', () => {
    const board = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
    ]
    expect(Board.lines(board)).toEqual([
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['3', '6', '9'],
      ['1', '5', '9'],
      ['3', '5', '7'],
    ])
  })
})
describe('Board.isVictory', () => {
  it('return false if lines are not completed', () => {
    const board = [
      ['1', '2', null],
      [null, '1', null],
      ['1', '2', null],
    ]
    expect(Board.isVictory(board)).toEqual(false)
  })

  it('return true if a horizontal line is completed', () => {
    const board = [
      [null, '2', null],
      ['1', '1', '1'],
      ['2', null, null],
    ]
    expect(Board.isVictory(board)).toEqual(true)
  })

  it('return true if a vertical line is completed', () => {
    const board = [
      ['1', '2', null],
      ['1', null, null],
      ['1', '2', null],
    ]
    expect(Board.isVictory(board)).toEqual(true)
  })

  it('return true if a diagonal line is completed', () => {
    const board = [
      ['1', '2', null],
      [null, '1', null],
      [null, '2', '1'],
    ]
    expect(Board.isVictory(board)).toEqual(true)
  })
})

describe('Board.isDraw', () => {
  it('should return false when a null cell exists', () => {
    const board = [
      ['1', '2', null],
      ['2', '1', '2'],
      ['1', '2', '2'],
    ]
    expect(Board.isDraw(board)).toEqual(false)
  })

  it('should return true when no null cells exists', () => {
    const board = [
      ['1', '2', '1'],
      ['2', '1', '2'],
      ['1', '2', '2'],
    ]
    expect(Board.isDraw(board)).toEqual(true)
  })
})

describe('Board.result', () => {
  it('should return undefined when game not completed', () => {
    const board = [
      ['1', '2', null],
      ['2', '1', '2'],
      ['1', '2', '2'],
    ]
    expect(Board.result(board, '1')).toBeUndefined()
  })

  it('should return winner when one player complete a line', () => {
    const board = [
      ['1', '2', '2'],
      ['2', '1', '2'],
      ['1', '2', '1'],
    ]
    expect(Board.result(board, '1')).toEqual({ winner: '1' })
  })

  it('should return draw when board is full and no line completed', () => {
    const board = [
      ['1', '2', '2'],
      ['2', '1', '1'],
      ['1', '2', '2'],
    ]
    expect(Board.result(board, '1')).toEqual({ draw: true })
  })
})

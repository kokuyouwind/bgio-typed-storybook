import { describe, it, expect } from 'vitest'
import clickCell from './clickCell'
import Board from '../models/board'
import { INVALID_MOVE } from 'boardgame.io/core'

describe('clickCell', () => {
  it('should place the correct value in the cell', () => {
    const G = {
      board: Board.empty,
    }

    expect(clickCell({ G, playerID: '1' }, 1, 1)).toEqual({
      board: [
        [null, null, null],
        [null, '1', null],
        [null, null, null],
      ],
    })
  })

  it('place only empty cell', () => {
    const G = {
      board: [
        [null, null, null],
        ['1', null, null],
        [null, null, null],
      ],
    }

    expect(clickCell({ G, playerID: '2' }, 0, 1)).toEqual(INVALID_MOVE)
  })
})

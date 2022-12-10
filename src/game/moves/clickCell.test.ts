import { describe, it, expect } from 'vitest'
import clickCell from './clickCell'
import Board from '../models/board'

describe('clickCell', () => {
  it('should place the correct value in the cell', () => {
    const G = {
      board: Board.empty,
    }

    clickCell({ G, playerID: '1' }, 3)

    expect(G).toEqual({
      board: [null, null, null, '1', null, null, null, null, null],
    })
  })

  it('place only empty cell', () => {
    const G = {
      board: [null, null, null, '1', null, null, null, null, null],
    }

    clickCell({ G, playerID: '2' }, 3)

    // not changed
    expect(G).toEqual({
      board: [null, null, null, '1', null, null, null, null, null],
    })
  })
})

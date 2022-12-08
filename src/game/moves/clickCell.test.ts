import { describe, test, expect } from 'vitest'
import clickCell from './clickCell'
import {INVALID_MOVE} from "boardgame.io/core";

describe('suite', () => {
  test('should place the correct value in the cell', () => {
    const G = {
      cells: [null, null, null, null, null, null, null, null, null],
    }

    clickCell({ G, playerID: '1' }, 3)

    expect(G).toEqual({
      cells: [null, null, null, '1', null, null, null, null, null],
    })
  })

  test('place only empty cell', () => {
    const G = {
      cells: [null, null, null, '1', null, null, null, null, null],
    }

    clickCell({ G, playerID: '2' }, 3)

    // not changed
    expect(G).toEqual({
      cells: [null, null, null, '1', null, null, null, null, null],
    })
  })
})

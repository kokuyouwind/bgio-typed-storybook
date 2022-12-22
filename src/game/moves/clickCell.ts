import { INVALID_MOVE } from 'boardgame.io/core'
import Board from '../models/board'
import type { Position } from '../models/position'
import type { Move } from '../types'

const clickCell: Move<[Position]> = ({ G, playerID }, pos) => {
  const board = Board.putPiece(G.board, playerID, pos)
  if (board === undefined) {
    return INVALID_MOVE
  }

  return { ...G, board }
}

export default clickCell

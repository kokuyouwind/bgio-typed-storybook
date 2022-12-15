import { Move } from '../types'
import { INVALID_MOVE } from 'boardgame.io/core'
import Board from '../models/board'

const clickCell: Move<[number, number]> = ({ G, playerID }, x, y) => {
  const board = Board.putPiece(G.board, playerID, x, y)
  if (board === undefined) {
    return INVALID_MOVE
  }

  return { ...G, board }
}

export default clickCell

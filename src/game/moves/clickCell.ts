import { Move } from '../types'
import { INVALID_MOVE } from 'boardgame.io/core'

const clickCell: Move<[number]> = ({ G, playerID }, id) => {
  const rowIdx = Math.floor(id / 3)
  const columnIdx = id % 3
  if (G.board[rowIdx][columnIdx] !== null) {
    return INVALID_MOVE
  }
  return {
    board: G.board.map((row, i) =>
      row.map((column, j) =>
        i === rowIdx && j === columnIdx ? playerID : column
      )
    ),
  }
}
export default clickCell

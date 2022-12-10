import { Move } from '../types'
import { INVALID_MOVE } from 'boardgame.io/core'

const clickCell: Move<[number]> = ({ G, playerID }, id) => {
  if (G.board[id] !== null) {
    return INVALID_MOVE
  }
  G.board[id] = playerID
}
export default clickCell

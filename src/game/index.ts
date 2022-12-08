import { Game } from './types'
import moves from './moves'

const TicTacToe: Game = {
  setup: () => ({ cells: Array(9).fill(null) }),
  turn: {
    minMoves: 1,
    maxMoves: 1,
  },
  moves,
}
export default TicTacToe

import { Game } from './types'
import moves from './moves'
import Board from './models/board'

const TicTacToe: Game = {
  setup: () => ({ board: Board.empty }),
  turn: {
    minMoves: 1,
    maxMoves: 1,
  },
  endIf: ({ G, ctx }) => Board.result(G.board, ctx.currentPlayer),
  moves,
}
export default TicTacToe

import Board from './models/board'
import moves from './moves'
import type { Game } from './types'

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

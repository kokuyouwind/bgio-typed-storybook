import Board from './models/board'
import moves from './moves'
import type { Game } from './types'

const TicTacToe: Game = {
  name: 'tic-tac-toe',
  minPlayers: 2,
  maxPlayers: 2,
  setup: () => ({ board: Board.empty }),
  turn: {
    minMoves: 1,
    maxMoves: 1,
  },
  endIf: ({ G, ctx }) => Board.result(G.board, ctx.currentPlayer),
  moves,
  ai: {
    enumerate: (G, _ctx) => {
      const m = G.board.flatMap((line, y) =>
        line.flatMap((cell, x) =>
          cell === null ? [{ move: 'clickCell', args: [[x, y]] }] : []
        )
      )
      console.log(m)
      return m
    },
  },
}
export default TicTacToe

import React from 'react'
import { Client } from 'boardgame.io/react'
import TicTacToe from '../game'
import { Board } from './components/boards/Board'
import type { BoardProps } from 'boardgame.io/react'
import type { GameState } from 'game/types'

type Props = BoardProps<GameState>
const TicTacToeBoard: React.FC<Props> = ({ G, moves }) => {
  return <Board board={G.board} onClick={moves.clickCell} />
}

const App = Client({ game: TicTacToe, board: TicTacToeBoard })

export default App

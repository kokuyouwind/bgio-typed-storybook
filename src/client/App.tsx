import { Client, BoardProps } from 'boardgame.io/react'
import { GameState } from 'game/types'
import React from 'react'
import TicTacToe from '../game'
import { Board } from './components/boards/Board'

type Props = BoardProps<GameState>
const TicTacToeBoard: React.FC<Props> = ({ G, moves }) => {
  return <Board board={G.board} onClick={moves.clickCell} />
}

const App = Client({ game: TicTacToe, board: TicTacToeBoard })

export default App

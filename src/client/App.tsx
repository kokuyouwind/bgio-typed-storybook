import { Client, BoardProps } from 'boardgame.io/react'
import { GameState } from 'game/types'
import React from 'react'
import TicTacToe from '../game'
import { Board } from './components/boards/Board'

type Props = BoardProps<GameState>
const TicTacToeBoard: React.FC<Props> = ({ G }) => {
  return <Board board={G.board} />
}

const App = Client({ game: TicTacToe, board: TicTacToeBoard })

export default App

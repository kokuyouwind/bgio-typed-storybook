import { Client } from 'boardgame.io/react'
import TicTacToe from '../game'

const App = Client({ game: TicTacToe })

export default App

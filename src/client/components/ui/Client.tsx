import { Client as BGClient } from 'boardgame.io/react'
import TicTacToe from '../../../game'
import MainView from './MainView'

const Client = BGClient({ game: TicTacToe, board: MainView })

export default Client

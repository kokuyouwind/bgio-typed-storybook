import { Client as BGClient } from 'boardgame.io/react'
import TicTacToe from '../../../core'
import MainView from './MainView'

const Client = BGClient({ game: TicTacToe, board: MainView })

export default Client

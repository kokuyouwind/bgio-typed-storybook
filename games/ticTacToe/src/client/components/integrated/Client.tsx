import { Client as BGClient } from 'boardgame.io/react'
import TicTacToe from '../../../core'
import MainView from '../ui/MainView'

const Client = BGClient({ game: TicTacToe, board: MainView, debug: true })

export default Client

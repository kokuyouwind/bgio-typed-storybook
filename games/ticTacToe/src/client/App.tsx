import { Lobby } from 'boardgame.io/react'
import TicTacToe from '../core'
import MainView from './components/ui/MainView'

const Client = () => {
  return (
    <Lobby
      gameServer={`http://${window.location.hostname}:8000`}
      lobbyServer={`http://${window.location.hostname}:8000`}
      gameComponents={[{ game: TicTacToe, board: MainView }]}
    />
  )
}
export default Client

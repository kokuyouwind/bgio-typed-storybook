import React from 'react'
import { Lobby } from 'boardgame.io/react'
import MainView from 'ticTacToe/client/components/ui/MainView'
import TicTacToe from 'ticTacToe/core'

const Client: React.FC = () => {
  return (
    <Lobby
      gameServer={import.meta.env.VITE_SERVER_URL}
      lobbyServer={import.meta.env.VITE_SERVER_URL}
      gameComponents={[{ game: TicTacToe, board: MainView }]}
    />
  )
}
export default Client

import { Server, Origins } from 'boardgame.io/server'
import TicTacToe from '../../games/ticTacToe/src/core'

const server = Server({
  games: [TicTacToe],
  origins: [process.env.ORIGIN_URL ?? Origins.LOCALHOST],
})

// eslint-disable-next-line @typescript-eslint/no-floating-promises
server.run(8000)

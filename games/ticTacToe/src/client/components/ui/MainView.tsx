import React from 'react'
import { Board } from '../boards/Board'
import SystemMessage from './SystemMessage'
import type { BoardProps } from 'boardgame.io/react'
import type { GameState } from 'core/types'

export type MainViewProps = BoardProps<GameState>

const MainView: React.FC<MainViewProps> = ({ G, moves, ctx }) => {
  return (
    <>
      <SystemMessage currentPlayer={ctx.currentPlayer} result={ctx.gameover} />
      <Board board={G.board} onClick={moves.clickCell} />
    </>
  )
}
export default MainView

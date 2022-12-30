import type { BoardType } from './models/board'
import type B from 'boardgame.io'

export interface GameState {
  board: BoardType
}

export type Game = B.Game<GameState>
export type MoveFn = B.MoveFn<GameState>
export type MoveContext = Parameters<MoveFn>[0]
export type MoveResult = ReturnType<MoveFn>
export type Move<
  Args extends any[] = [],
  CtxKeys extends keyof MoveContext = 'G' | 'playerID'
> = (ctx: Pick<MoveContext, CtxKeys>, ...args: Args) => MoveResult

export type GameResult = undefined | { winner: B.PlayerID } | { draw: true }

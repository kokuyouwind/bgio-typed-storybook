import B from 'boardgame.io'
import { INVALID_MOVE } from 'boardgame.io/core'

export interface GameState {
  cells: Array<string | null>
}
export type Game = B.Game<GameState>
export type MoveContext = B.FnContext<GameState> & { playerID: B.PlayerID }
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type MoveResult = void | GameState | typeof INVALID_MOVE

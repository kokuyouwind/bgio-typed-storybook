import B from 'boardgame.io'
import {INVALID_MOVE} from "boardgame.io/core";

export interface GameState {
  cells: Array<string | null>
}
export type Game = B.Game<GameState>
export type MoveContext = B.FnContext<GameState> & { playerID: B.PlayerID }
export type MoveResult = void | GameState | typeof INVALID_MOVE

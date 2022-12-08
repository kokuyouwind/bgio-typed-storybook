import { MoveContext, MoveResult } from '../types'
import {INVALID_MOVE} from "boardgame.io/core";

const clickCell = (
  { G, playerID }: Pick<MoveContext, 'G' | 'playerID'>,
  id: number
): MoveResult => {
  if (G.cells[id] !== null) {
    return INVALID_MOVE;
  }
  G.cells[id] = playerID
}
export default clickCell

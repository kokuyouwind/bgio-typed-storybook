import {MoveContext, MoveResult} from '../types'

const clickCell = (
    { G, playerID }: Pick<MoveContext, 'G' | 'playerID'>,
    id: number
) => {
  G.cells[id] = playerID
}
export default clickCell

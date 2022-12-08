import { Game } from './types'
import moves from "./moves";

const TicTacToe: Game = {
  setup: () => ({ cells: Array(9).fill(null) }),
  moves: moves,
}
export default TicTacToe

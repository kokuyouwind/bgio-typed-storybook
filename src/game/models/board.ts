import { GameResult } from '../types'
import { PlayerID } from 'boardgame.io'
import Line, { LineType } from './line'
import Util from '../util'
import { Position } from './position'
import { CellType } from './cell'

export type BoardType = LineType[]

const height = 3
const width = 3

const empty = Array(height).fill(width).map(Line.empty)

const get = (board: BoardType, [x, y]: Position): CellType => board[y][x]

const set = (board: BoardType, [x, y]: Position, v: CellType): BoardType =>
  board.map((line, by) =>
    line.map((column, bx) => (bx === x && by === y ? v : column))
  )

const putPiece = (
  board: BoardType,
  playerID: PlayerID,
  pos: Position
): BoardType | undefined => {
  if (get(board, pos) !== null) {
    return undefined
  }

  return set(board, pos, playerID)
}

const lines = (board: BoardType): LineType[] => {
  const horizontalLines: LineType[] = board
  const vertialLines: LineType[] = Util.range(width).map((i) =>
    board.map((row) => row[i])
  )
  const diagonalLines: LineType[] = [
    Util.range(height).map((i) => board[i][i]),
    Util.range(height).map((i) => board[i][width - 1 - i]),
  ]
  return [...horizontalLines, ...vertialLines, ...diagonalLines]
}

const isVictory = (board: BoardType): boolean => {
  return lines(board).some(Line.isCompleted)
}
const isDraw = (board: BoardType): boolean => {
  return board.every(Line.isFull)
}

const result = (board: BoardType, currentPlayer: PlayerID): GameResult => {
  if (isVictory(board)) {
    return { winner: currentPlayer }
  }
  if (isDraw(board)) {
    return { draw: true }
  }
}

const Board = {
  height,
  width,
  empty,
  putPiece,
  lines,
  isVictory,
  isDraw,
  result,
}
export default Board

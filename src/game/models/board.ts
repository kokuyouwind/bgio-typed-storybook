import { GameResult } from '../types'
import { PlayerID } from 'boardgame.io'
import Line, { LineType } from './line'
import Util from '../util'

export type BoardType = LineType[]

const height = 3
const width = 3

const empty = Array(height).fill(width).map(Line.empty)

const putPiece = (
  board: BoardType,
  playerID: PlayerID,
  x: number,
  y: number
): BoardType | undefined => {
  if (board[y][x] !== null) {
    return undefined
  }

  return board.map((line, by) =>
    line.map((column, bx) => (bx === x && by === y ? playerID : column))
  )
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

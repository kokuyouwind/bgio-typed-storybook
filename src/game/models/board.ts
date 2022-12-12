import { GameResult } from '../types'
import { PlayerID } from 'boardgame.io'

export type Cell = PlayerID | null
export type Line = Cell[]
export type BoardType = Line[]

const height = 3
const width = 3

const empty = [...Array(height)].map((_) => Array(width).fill(null))

const lines = (board: BoardType): Line[] => {
  const horizontalLines: Line[] = board
  const vertialLines: Line[] = board[0].map((_, i) =>
    board.map((row) => row[i])
  )
  const diagonalLines: Line[] = [
    [...Array(height)].map((_, i) => board[i][i]),
    [...Array(height)].map((_, i) => board[i][width - 1 - i]),
  ]
  return [...horizontalLines, ...vertialLines, ...diagonalLines]
}

const isVictory = (board: BoardType): boolean => {
  return lines(board).some((line) =>
    line.every((cell) => cell != null && cell === line[0])
  )
}
const isDraw = (board: BoardType): boolean => {
  return board.every((line) => line.every((cell) => cell !== null))
}
const result = (board: BoardType, currentPlayer: PlayerID): GameResult => {
  if (isVictory(board)) {
    return { winner: currentPlayer }
  }
  if (isDraw(board)) {
    return { draw: true }
  }
}

const Board = { height, width, empty, lines, isVictory, isDraw, result }
export default Board

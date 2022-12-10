import { GameResult } from '../types'
import { PlayerID } from 'boardgame.io'

export type Cell = string | null
export type BoardType = Cell[]

const size = 9
const empty = Array(size).fill(null)
const isVictory = (board: BoardType): boolean => {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const isRowComplete = (row: number[]): boolean => {
    const symbols = row.map((i: number) => board[i])
    return symbols.every((i) => i !== null && i === symbols[0])
  }

  return positions.map(isRowComplete).some((i) => i)
}
const isDraw = (board: BoardType): boolean => {
  return board.filter((c) => c === null).length === 0
}
const result = (board: BoardType, currentPlayer: PlayerID): GameResult => {
  if (isVictory(board)) {
    return { winner: currentPlayer }
  }
  if (isDraw(board)) {
    return { draw: true }
  }
}

const Board = { size, empty, isVictory, isDraw, result }
export default Board

import { PlayerID } from 'boardgame.io'

export type Cell = PlayerID | null
export type LineType = Cell[]

const empty = (n: number): LineType => Array(n).fill(null)

const isCompleted = (line: LineType): boolean => {
  return line.every((cell) => cell != null && cell === line[0])
}

const isFull = (line: LineType): boolean => {
  return line.every((cell) => cell !== null)
}

const Line = { empty, isCompleted, isFull }
export default Line

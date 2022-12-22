import { Sheet } from '@mui/joy'
import React from 'react'
import { BoardType } from 'game/models/board'
import { Position } from 'game/models/position'
import { Line } from './Line'

export interface BoardProps {
  board: BoardType
  onClick: (pos: Position) => void
}

export const Board: React.FC<BoardProps> = ({ board, onClick }) => (
  <Sheet
    sx={{
      aspectRatio: '1 / 1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      minHeight: '350px',
      maxHeight: '400px',
    }}
  >
    {board.map((line, y) => (
      <Line key={y} line={line} onClick={(x) => onClick([x, y])} />
    ))}
  </Sheet>
)

import { Sheet } from '@mui/joy'
import React from 'react'
import { BoardType } from 'game/models/board'
import { Line } from './Line'

export interface BoardProps {
  board: BoardType
}

export const Board: React.FC<BoardProps> = ({ board }) => (
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
    {board.map((line, i) => (
      <Line key={i} line={line} />
    ))}
  </Sheet>
)

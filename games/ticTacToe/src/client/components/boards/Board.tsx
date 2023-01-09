import React from 'react'
import { Sheet } from '@mui/joy'
import { Line } from './Line'
import type { BoardType } from 'core/models/board'
import type { Position } from 'core/models/position'

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
      <Line
        key={y}
        line={line}
        lineNumber={y}
        onClick={(x) => {
          onClick([x, y])
        }}
      />
    ))}
  </Sheet>
)

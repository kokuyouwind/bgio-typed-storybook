import React from 'react'
import { Sheet } from '@mui/joy'
import { Cell } from './Cell'
import type { LineType } from 'core/models/line'

export interface LineProps {
  line: LineType
  lineNumber: number
  onClick: (i: number) => void
}

export const Line: React.FC<LineProps> = ({ line, lineNumber, onClick }) => (
  <Sheet
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      minWidth: '350px',
      maxWidth: '400px',
    }}
  >
    {line.map((cell, i) => (
      <Cell
        key={i}
        cell={cell}
        position={[i, lineNumber]}
        onClick={() => onClick(i)}
      />
    ))}
  </Sheet>
)

import React from 'react'
import { Sheet } from '@mui/joy'
import { Cell } from './Cell'
import type { LineType } from 'game/models/line'

export interface LineProps {
  line: LineType
  onClick: (i: number) => void
}

export const Line: React.FC<LineProps> = ({ line, onClick }) => (
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
      <Cell key={i} cell={cell} onClick={() => onClick(i)} />
    ))}
  </Sheet>
)

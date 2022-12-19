import { Sheet } from '@mui/joy'
import { LineType } from 'game/models/line'
import React from 'react'
import { Cell } from './Cell'

export interface LineProps {
  line: LineType
}

export const Line: React.FC<LineProps> = ({ line }) => (
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
      <Cell key={i} cell={cell} />
    ))}
  </Sheet>
)

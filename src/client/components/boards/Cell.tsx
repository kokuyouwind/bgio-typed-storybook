import React from 'react'
import { Button } from '@mui/joy'
import { Stone } from '../pieces/Stone'
import type { CellType } from 'game/models/cell'
import type { Position } from 'game/models/position'

export interface CellProps {
  cell: CellType
  position: Position
  onClick: () => void
}

export const Cell: React.FC<CellProps> = ({
  cell,
  position: [x, y],
  onClick,
}) => {
  return (
    <Button
      size="lg"
      variant="outlined"
      onClick={() => onClick()}
      data-testid={`cell-${x}-${y}`}
      sx={{
        aspectRatio: '1 / 1',
        width: '100%',
        borderRadius: '0',
        flex: '1',
      }}
    >
      {cell === null ? '' : <Stone color={cell === '0' ? 'black' : 'white'} />}
    </Button>
  )
}

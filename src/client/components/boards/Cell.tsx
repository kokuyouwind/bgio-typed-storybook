import { Button } from '@mui/joy'
import React from 'react'
import { CellType } from 'game/models/cell'
import { Stone } from '../pieces/Stone'

export interface CellProps {
  cell: CellType
}

export const Cell: React.FC<CellProps> = ({ cell }) => {
  return (
    <Button
      size="lg"
      variant="outlined"
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

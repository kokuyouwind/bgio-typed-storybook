import { Button } from '@mui/joy'
import React from 'react'
import { CellType } from 'game/models/cell'
import { Stone } from '../pieces/Stone'

export interface CellProps {
  cell: CellType
  onClick: () => void
}

export const Cell: React.FC<CellProps> = ({ cell, onClick }) => {
  return (
    <Button
      size="lg"
      variant="outlined"
      onClick={() => onClick()}
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

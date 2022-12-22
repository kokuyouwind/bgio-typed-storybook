import { Sheet } from '@mui/joy'
import { Cell } from './Cell'
import type { Meta, ComponentStoryObj } from '@storybook/react'

const meta: Meta<typeof Cell> = { component: Cell }
export default meta

export const Empty: ComponentStoryObj<typeof Cell> = {
  args: {
    cell: null,
  },
  render: (args) => (
    <Sheet sx={{ maxWidth: '100px' }}>
      <Cell {...args} />
    </Sheet>
  ),
}

export const Player0: ComponentStoryObj<typeof Cell> = {
  ...Empty,
  args: {
    cell: '0',
  },
}

export const Player1: ComponentStoryObj<typeof Cell> = {
  ...Empty,
  args: {
    cell: '1',
  },
}

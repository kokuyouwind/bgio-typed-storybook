import { Sheet } from '@mui/joy'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Cell } from './Cell'

const Meta: ComponentMeta<typeof Cell> = { component: Cell }
export default Meta

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

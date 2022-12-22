import { ComponentStoryObj, Meta } from '@storybook/react'
import { Board } from './Board'

const meta: Meta<typeof Board> = { component: Board }
export default meta

export const Empty: ComponentStoryObj<typeof Board> = {
  args: {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
  },
}

export const Filled: ComponentStoryObj<typeof Board> = {
  args: {
    board: [
      ['0', '1', null],
      ['1', '1', '0'],
      [null, '0', '1'],
    ],
  },
}

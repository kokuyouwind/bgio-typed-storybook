import { Board } from './Board'
import type { ComponentStoryObj, Meta } from '@storybook/react'

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

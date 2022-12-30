import { Line } from './Line'
import type { Meta, ComponentStoryObj } from '@storybook/react'

const meta: Meta<typeof Line> = { component: Line }
export default meta

export const Empty: ComponentStoryObj<typeof Line> = {
  args: {
    line: [null, null, null],
    lineNumber: 0,
  },
}

export const Filled: ComponentStoryObj<typeof Line> = {
  args: {
    line: ['0', '1', null],
    lineNumber: 0,
  },
}

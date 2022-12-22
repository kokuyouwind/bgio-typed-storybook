import { Meta, ComponentStoryObj } from '@storybook/react'
import { Line } from './Line'

const meta: Meta<typeof Line> = { component: Line }
export default meta

export const Empty: ComponentStoryObj<typeof Line> = {
  args: {
    line: [null, null, null],
  },
}

export const Filled: ComponentStoryObj<typeof Line> = {
  args: {
    line: ['0', '1', null],
  },
}

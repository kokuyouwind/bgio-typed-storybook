import SystemMessage from './SystemMessage'
import type { Meta, ComponentStoryObj } from '@storybook/react'

const meta: Meta<typeof SystemMessage> = { component: SystemMessage }
export default meta

export const Player1Turn: ComponentStoryObj<typeof SystemMessage> = {
  args: {
    currentPlayer: '1',
    result: undefined,
  },
}

export const Player1Win: ComponentStoryObj<typeof SystemMessage> = {
  args: {
    currentPlayer: undefined,
    result: { winner: '1' },
  },
}

export const Draw: ComponentStoryObj<typeof SystemMessage> = {
  args: {
    currentPlayer: undefined,
    result: { draw: true },
  },
}

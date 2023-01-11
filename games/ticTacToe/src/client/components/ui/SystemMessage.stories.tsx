import SystemMessage from './SystemMessage'
import type { Meta, ComponentStoryObj } from '@storybook/react'

const meta: Meta<typeof SystemMessage> = { component: SystemMessage }
export default meta

export const Player1Turn: ComponentStoryObj<typeof SystemMessage> = {
  args: {
    currentPlayer: '1',
    matchData: undefined,
    result: undefined,
  },
}

export const AliceTurn: ComponentStoryObj<typeof SystemMessage> = {
  args: {
    currentPlayer: '0',
    matchData: [
      { id: 0, name: 'alice' },
      { id: 1, name: 'bob' },
    ],
    result: undefined,
  },
}

export const Player1Win: ComponentStoryObj<typeof SystemMessage> = {
  args: {
    currentPlayer: undefined,
    matchData: undefined,
    result: { winner: '1' },
  },
}

export const AliceWin: ComponentStoryObj<typeof SystemMessage> = {
  args: {
    currentPlayer: undefined,
    matchData: [
      { id: 0, name: 'alice' },
      { id: 1, name: 'bob' },
    ],
    result: { winner: '0' },
  },
}

export const Draw: ComponentStoryObj<typeof SystemMessage> = {
  args: {
    currentPlayer: undefined,
    matchData: undefined,
    result: { draw: true },
  },
}

import { userEvent, within } from '@storybook/testing-library'
import Client from './Client'
import type { Meta, ComponentStoryObj } from '@storybook/react'

const meta: Meta<typeof Client> = { component: Client }
export default meta

export const WinBlack: ComponentStoryObj<typeof Client> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('cell-0-0'))
    await userEvent.click(canvas.getByTestId('cell-1-0'))
    await userEvent.click(canvas.getByTestId('cell-1-1'))
    await userEvent.click(canvas.getByTestId('cell-2-2'))
    await userEvent.click(canvas.getByTestId('cell-0-1'))
    await userEvent.click(canvas.getByTestId('cell-0-2'))
    await userEvent.click(canvas.getByTestId('cell-2-1'))
  },
}

export const Draw: ComponentStoryObj<typeof Client> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('cell-1-1'))
    await userEvent.click(canvas.getByTestId('cell-0-0'))
    await userEvent.click(canvas.getByTestId('cell-1-0'))
    await userEvent.click(canvas.getByTestId('cell-1-2'))
    await userEvent.click(canvas.getByTestId('cell-0-2'))
    await userEvent.click(canvas.getByTestId('cell-2-0'))
    await userEvent.click(canvas.getByTestId('cell-0-1'))
    await userEvent.click(canvas.getByTestId('cell-2-1'))
    await userEvent.click(canvas.getByTestId('cell-2-2'))
  },
}

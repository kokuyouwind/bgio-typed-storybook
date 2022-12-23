import { action } from '@storybook/addon-actions'
import MainView from './MainView'
import type { Meta, ComponentStoryObj } from '@storybook/react'

const meta: Meta<typeof MainView> = { component: MainView }
export default meta

export const Start: ComponentStoryObj<typeof MainView> = {
  args: {
    G: {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    },
    moves: {
      clickCell: action('clickCell'),
    },
  },
}

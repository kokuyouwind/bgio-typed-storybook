import { Stone } from './Stone'
import type { Meta, ComponentStoryObj } from '@storybook/react'

const meta: Meta<typeof Stone> = { component: Stone }
export default meta

export const Black: ComponentStoryObj<typeof Stone> = {
  args: {
    color: 'black',
  },
}

export const White: ComponentStoryObj<typeof Stone> = {
  args: {
    color: 'white',
  },
}

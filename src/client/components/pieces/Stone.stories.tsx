import { Meta, ComponentStoryObj } from '@storybook/react'
import { Stone } from './Stone'

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

import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Stone } from './Stone'

const Meta: ComponentMeta<typeof Stone> = { component: Stone }
export default Meta

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

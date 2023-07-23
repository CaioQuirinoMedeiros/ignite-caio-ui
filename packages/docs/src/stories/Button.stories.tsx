import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@caioquirinomedeiros/react'

export default {
  title: 'Button',
  component: Button,
  args: { children: 'Primary' }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  name: 'Primary Button'
}

export const Big: StoryObj<ButtonProps> = {
  name: 'Big Button',
  args: { size: 'big' }
}

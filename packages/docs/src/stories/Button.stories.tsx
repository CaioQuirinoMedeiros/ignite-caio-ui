import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@caioquirinomedeiros/react'
import { ArrowRight } from 'phosphor-react'

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false
  },

  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' }
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    onClick: { action: 'clicked' }
  }
}

export default meta
type Story = StoryObj<ButtonProps>

export const Default: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small'
  }
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight='bold' />
      </>
    )
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

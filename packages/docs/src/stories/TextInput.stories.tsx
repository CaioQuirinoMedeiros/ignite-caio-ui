import { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Text,
  TextInput,
  TextInputProps
} from '@caioquirinomedeiros/react'

const meta: Meta<TextInputProps> = {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    disabled: false,
    placeholder: "Placeholder"
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    placeholder: {
      type: 'string'
    }
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        <Text size='sm' as='label'>
          E-mail address
        </Text>
        {Story()}
      </Box>
    )
  ]
}

export default meta
type Story = StoryObj<TextInputProps>

export const Default: Story = {
  args: {
    placeholder: 'Type your name'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const WithPrefix: Story = {
  args: {
    prefix: 'cal.com/'
  }
}

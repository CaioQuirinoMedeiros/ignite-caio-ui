import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@caioquirinomedeiros/react'

const meta: Meta<TextAreaProps> = {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        <Text size='sm' as='label'>
          Observations
        </Text>
        {Story()}
      </Box>
    )
  ]
}

export default meta
type Story = StoryObj<TextAreaProps>

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

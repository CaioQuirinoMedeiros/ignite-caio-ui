import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@caioquirinomedeiros/react'

const meta: Meta<CheckboxProps> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', flexDirection: 'row', gap: '$2', alignItems: "center" }}>
        {Story()}
        <Text size='sm' as='label'>
          Accept terms of use
        </Text>
      </Box>
    )
  ]
}

export default meta
type Story = StoryObj<CheckboxProps>

export const Default: Story = {
  args: {}
}

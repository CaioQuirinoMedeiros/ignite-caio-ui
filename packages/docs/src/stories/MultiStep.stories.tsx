import { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@caioquirinomedeiros/react'

const meta: Meta<MultiStepProps> = {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],
  args: {
    size: 4,
    currentStep: 1
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        {Story()}
      </Box>
    )
  ]
}

export default meta
type Story = StoryObj<MultiStepProps>

export const Default: Story = {
  args: {}
}

export const Full: Story = {
  args: {
    currentStep: 4
  }
}

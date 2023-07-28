import { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Text,
  Tooltip,
  TooltipProps
} from '@caioquirinomedeiros/react'

const meta: Meta<TooltipProps> = {
  title: 'Data display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    tooltipText: 'Tooltip',
    children: <Button>Teste</Button>
  },
  argTypes: {
    tooltipText: {
      type: 'string'
    },
    children: {
      control: {
        type: null
      }
    }
  },
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    )
  ]
}

export default meta
type Story = StoryObj<TooltipProps>

export const Default: Story = {}

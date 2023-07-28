import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, useToast, ToastProps } from '@caioquirinomedeiros/react'

function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() =>
        toast({
          title: 'Agendamento realizado',
          description: 'Quarta-feira, 23 de Outubro às 16h'
        })
      }
    >
      Add toast
    </Button>
  )
}

const meta: Meta<ToastProps> = {
  title: 'Feedback/Toast',
  component: ToastDemo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    )
  ]
}

export default meta
type Story = StoryObj<ToastProps>

export const Default: Story = {}

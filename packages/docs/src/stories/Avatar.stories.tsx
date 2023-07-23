import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@caioquirinomedeiros/react'

const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com./CaioQuirinoMedeiros.png'
  }
}

export default meta
type Story = StoryObj<AvatarProps>

export const Default: Story = {}

/**
 * Ao não ter imagem, carrega um fallback
 */
export const WithFallback: Story = {
  args: {
    src: undefined
  }
}

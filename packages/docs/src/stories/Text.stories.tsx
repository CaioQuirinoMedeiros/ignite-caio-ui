import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@caioquirinomedeiros/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: "md",
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsam nesciunt iusto, reprehenderit aperiam ratione iste. Vel, facilis. Ducimus, accusamus? Esse sit vitae corporis optio, dolorum illum cum illo debitis.'
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl'
      ],
      control: { type: 'inline-radio' }
    }
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}

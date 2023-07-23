import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@caioquirinomedeiros/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsam nesciunt iusto, reprehenderit aperiam ratione iste. Vel, facilis. Ducimus, accusamus? Esse sit vitae corporis optio, dolorum illum cum illo debitis.'
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}

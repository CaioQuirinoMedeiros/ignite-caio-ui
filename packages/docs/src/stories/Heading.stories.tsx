import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@caioquirinomedeiros/react'

/**
 * Stories do componente Heading, usado em títulos
 */
const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Heading',
    size: "md"
  },
  argTypes: {
    size: {
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl'
      ],
      control: { type: 'inline-radio' }
    }
  }
}

export default meta
type Story = StoryObj<HeadingProps>

export const Default: Story = {}

/**
 * Por padrão o Heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`
 */
export const CustomTag: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  }
}

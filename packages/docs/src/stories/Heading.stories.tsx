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
    children: 'Heading'
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

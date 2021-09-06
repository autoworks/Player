import React from 'react'
import ModalHeader from '.'

export default {
  title: 'Unsorted/ModalHeader',
  component: ModalHeader
}

const Template = (args) => <ModalHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  heading: 'Example heading',
  description: 'Example description'
}

export const Inverse = Template.bind({})
Inverse.parameters = {
  backgrounds: { default: 'dark' }
}
Inverse.args = {
  ...Default.args,
  inverse: true
}

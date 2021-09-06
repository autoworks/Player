import React from 'react'
import TypeNav from '.'

export default {
  title: 'Unsorted/TypeNav',
  component: TypeNav
}

const Template = (args) => <TypeNav {...args} />

export const Default = Template.bind({})
Default.args = {
  availableTypes: ['exterior', 'video', 'photo', 'interior'],
  activeType: 'photo'
}

export const Inverse = Template.bind({})
Inverse.parameters = {
  backgrounds: { default: 'dark' }
}
Inverse.args = {
  ...Default.args,
  inverse: true
}

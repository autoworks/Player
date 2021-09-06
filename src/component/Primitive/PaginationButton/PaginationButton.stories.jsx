import React from 'react'
import PaginationButton from '.'

export default {
  title: 'Unsorted/PaginationButton',
  component: PaginationButton
}

const Template = (args) => <PaginationButton {...args} />

export const Default = Template.bind({})
Default.args = {
  direction: 'next'
}

export const Inverse = Template.bind({})
Inverse.parameters = {
  backgrounds: { default: 'dark' }
}
Inverse.args = {
  ...Default.args,
  inverse: true
}

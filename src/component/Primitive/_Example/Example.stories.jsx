import React from 'react'
import Example from '.'

export default {
  title: 'Unsorted/Example',
  component: Example
}

const Template = (args) => <Example {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Default content'
}

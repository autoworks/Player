import React from 'react'
import ViewerHeader from '.'

export default {
  title: 'Unsorted/ViewerHeader',
  component: ViewerHeader
}

const Template = (args) => <ViewerHeader {...args} />

export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'dark' }
}
Default.args = {
  availableTypes: ['exterior', 'interior', 'photo'],
  activeType: 'photo'
}

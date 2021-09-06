import React from 'react'
import Viewer from '.'

import items from '@/fixture/items'

export default {
  title: 'Unsorted/Viewer',
  component: Viewer
}

const Template = (args) => <Viewer {...args} />

export const Default = Template.bind({})
Default.args = {
  items
}

export const Inverse = Template.bind({})
Inverse.parameters = {
  backgrounds: { default: 'dark' }
}
Inverse.args = {
  ...Default.args,
  inverse: true
}

export const Showcase = Template.bind({})
Showcase.args = {
  ...Default.args,
  showcase: true
}

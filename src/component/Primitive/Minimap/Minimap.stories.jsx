import React from 'react'
import Minimap from '.'

export default {
  title: 'Unsorted/Minimap',
  component: Minimap
}

const Template = (args) => <Minimap {...args} />

export const Default = Template.bind({})
Default.args = {}

import React from 'react'
import Hotspot from '.'

export default {
  title: 'Unsorted/Hotspot',
  component: Hotspot
}

const Template = (args) => <Hotspot {...args} />

export const Default = Template.bind({})
Default.args = {
  revealDelay: 0
}

export const RevealDelay = Template.bind({})
RevealDelay.args = {
  revealDelay: 1000
}

export const Tooltip = Template.bind({})
Tooltip.args = {
  tooltip: 'Example text'
}

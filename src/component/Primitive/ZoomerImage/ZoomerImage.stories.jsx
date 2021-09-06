import React from 'react'
import ZoomerImage from '.'

export default {
  title: 'Unsorted/ZoomerImage',
  component: ZoomerImage,
  argTypes: {
    children: { control: { type: null } },
    scale: { control: { type: 'range', min: 0.5, max: 2, step: 0.1 } },
    x: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    y: { control: { type: 'range', min: 0, max: 1, step: 0.1 } }
  }
}

const Template = (args) => <ZoomerImage {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <img src="https://via.placeholder.com/1600x900" alt="" />,
  scale: 1,
  x: 0.5,
  y: 0.5
}

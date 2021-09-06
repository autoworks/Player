import React from 'react'
import MediaRange from '.'

export default {
  title: 'Unsorted/MediaRange',
  component: MediaRange,
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    }
  }
}

const Template = (args) => <MediaRange {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'example',
  value: 25
}

export const Inverse = Template.bind({})
Inverse.parameters = {
  backgrounds: { default: 'dark' }
}
Inverse.args = {
  ...Default.args,
  inverse: true
}

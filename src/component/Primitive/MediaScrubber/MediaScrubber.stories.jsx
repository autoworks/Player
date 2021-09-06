import React from 'react'
import MediaScrubber from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Unsorted/MediaScrubber',
  component: MediaScrubber,
  argTypes: {
    duration: {
      control: { type: 'range', min: 0, max: 400, step: 1 }
    },
    progress: {
      control: { type: 'range', min: 0, max: 400, step: 1 }
    }
  }
}

const Template = (args) => <MediaScrubber {...args} />

export const Default = Template.bind({})
Default.args = {
  duration: 120,
  progress: 37,
  onChange: action('Progress changed')
}

export const Inverse = Template.bind({})
Inverse.parameters = {
  backgrounds: { default: 'dark' }
}
Inverse.args = {
  ...Default.args,
  inverse: true
}

import React from 'react'
import MediaVolume from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Unsorted/MediaVolume',
  component: MediaVolume,
  argTypes: {
    volume: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    }
  }
}

const Template = (args) => <MediaVolume {...args} />

export const Default = Template.bind({})
Default.args = {
  volume: 80,
  onChange: action('Volume changed')
}

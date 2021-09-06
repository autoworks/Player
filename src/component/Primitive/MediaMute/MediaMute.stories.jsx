import React from 'react'
import MediaMute from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Unsorted/MediaMute',
  component: MediaMute
}

const Template = (args) => <MediaMute {...args} />

export const Default = Template.bind({})
Default.args = {
  onChange: action('Volume changed')
}

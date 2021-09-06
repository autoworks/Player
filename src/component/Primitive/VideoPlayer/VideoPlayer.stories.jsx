import React from 'react'
import VideoPlayer from '.'

export default {
  title: 'Unsorted/VideoPlayer',
  component: VideoPlayer
}

const Template = (args) => <VideoPlayer {...args} />

export const Default = Template.bind({})
Default.args = {
  poster: 'https://via.placeholder.com/640x360',
  src:
    'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
}

export const Inverse = Template.bind({})
Inverse.parameters = {
  backgrounds: { default: 'dark' }
}
Inverse.args = {
  ...Default.args,
  inverse: true
}

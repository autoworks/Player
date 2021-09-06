import React from 'react'
import Rotation from './Rotation'

import rotatorImages from '@/fixture/rotator-images.json'

export default {
  title: 'Unsorted/Rotator/Rotation',
  component: Rotation,
  decorators: [
    (Story) => (
      <div style={{ height: 'calc(100vh - 2rem)' }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    children: { control: { type: null } },
    autoPlay: { control: { type: 'range', min: 0, max: 300, step: 5 } }
  }
}

const Template = (args) => <Rotation {...args} />

export const Default = Template.bind({})
Default.args = {
  cycle: true,
  children: rotatorImages.map((image, i) => (
    <img key={`Rotation:${i}`} src={image.src} alt="" />
  ))
}

export const Autoplay = Template.bind({})
Autoplay.args = {
  ...Default.args,
  autoPlay: 150
}

export const AutoplayAndStop = Template.bind({})
AutoplayAndStop.args = {
  ...Default.args,
  autoPlay: true
}

export const InitialFrame = Template.bind({})
InitialFrame.args = {
  ...Default.args,
  initialFrame: 30
}

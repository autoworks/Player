import React from 'react'
import Interior from '.'

export default {
  title: 'Unsorted/Interior',
  component: Interior,
  decorators: [
    (Story) => (
      <div style={{ height: 'calc(100vh - 2rem)' }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    hotspotDebug: { control: { type: null } }
  }
}

const Template = (args) => <Interior {...args} />

export const Default = Template.bind({})
Default.args = {
  controls: true,
  image:
    'https://res.cloudinary.com/citygate/image/upload/f_auto,q_auto/autoloadit/Img/pic/10/34794/360Int/01.jpg',
  poster:
    'https://res.cloudinary.com/citygate/image/upload/w_800,h_450,c_fill/autoloadit/Img/pic/10/34794/S-12122637-637.jpg',
  hotspots: [
    {
      tooltip: 'Gearstick',
      pitch: -55.126,
      yaw: 0.172,
      imageId: 'fff'
    },
    {
      tooltip: 'Beeper',
      pitch: -24.67652,
      yaw: 40.87814,
      imageId: 'ggg'
    }
  ]
}

export const HotspotDebugEnabled = Template.bind({})
HotspotDebugEnabled.args = {
  ...Default.args,
  hotspotDebug: true
}

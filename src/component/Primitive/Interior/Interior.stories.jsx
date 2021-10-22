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
  src:
    'https://media.auto.works/6000/e5fc7be505271576da3b2a3d438ff38c:ee97105b5080a824ee220940dc6aa4bd',
  poster:
    'https://media.auto.works/400/250/cover/e5fc7be505271576da3b2a3d438ff38c:ef91fd4a92f6ae416ede02c624f75968',
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

import React from 'react'
import Rotator from '.'

import rotatorImages from '@/fixture/rotator-images.json'

export default {
  title: 'Unsorted/Rotator',
  component: Rotator,
  decorators: [
    (Story) => (
      <div style={{ height: 'calc(100vh - 2rem)' }}>
        <Story />
      </div>
    )
  ]
}

const Template = (args) => <Rotator {...args} />

export const Default = Template.bind({})
Default.args = {
  images: rotatorImages
}

export const HotspotDebug = Template.bind({})
HotspotDebug.args = {
  ...Default.args,
  hotspotDebug: true
}

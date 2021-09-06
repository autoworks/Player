import React from 'react'
import HotspotDebugger from '.'

export default {
  title: 'Unsorted/HotspotDebugger',
  component: HotspotDebugger,
  decorators: [
    (Story) => (
      <div style={{ height: 'calc(100vh - 2rem)' }}>
        <Story />
      </div>
    )
  ]
}

const Template = (args) => <HotspotDebugger {...args} />

export const Default = Template.bind({})
Default.args = {
  src: '',
  hotspots: '[]'
}

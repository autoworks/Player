import React from 'react'
import HotspotFrame from '.'

export default {
  title: 'Unsorted/HotspotFrame',
  component: HotspotFrame,
  decorators: [
    (Story) => (
      <div style={{ height: 'calc(100vh - 2rem)' }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    children: { control: { type: null } },
    scale: {
      control: { type: 'number', min: 0, max: 2, step: 0.1 }
    }
  }
}

const Template = (args) => <HotspotFrame {...args} />

export const Default = Template.bind({})
Default.args = {
  hotspots: [
    { tooltip: 'Hotspot 1', x: 0.5, y: 0.25 },
    { tooltip: 'Hotspot 2', x: 0.25, y: 0.5 },
    { tooltip: 'Hotspot 3', x: 0.3, y: 0.9 },
    { tooltip: 'Hotspot 4', x: 0.09, y: 0.4 },
    { tooltip: 'Hotspot 5', x: 0.8, y: 0.15 }
  ]
}

export const Corners = Template.bind({})
Corners.args = {
  hotspots: [
    { tooltip: 'Top Left', x: 0, y: 0 },
    { tooltip: 'Top Center', x: 0.5, y: 0 },
    { tooltip: 'Top Right', x: 1, y: 0 },
    { tooltip: 'Middle Left', x: 0, y: 0.5 },
    { tooltip: 'Middle Center', x: 0.5, y: 0.5 },
    { tooltip: 'Middle Right', x: 1, y: 0.5 },
    { tooltip: 'Bottom Left', x: 1, y: 1 },
    { tooltip: 'Bottom Center', x: 0.5, y: 1 },
    { tooltip: 'Bottom Right', x: 0, y: 1 }
  ]
}

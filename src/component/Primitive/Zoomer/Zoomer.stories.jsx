import React from 'react'
import Zoomer from '.'

// import { getGalleryImages } from '@/fixture/stubs'

export default {
  title: 'Unsorted/Zoomer',
  component: Zoomer,
  decorators: [
    (Story) => (
      <div style={{ height: 'calc(100vh - 2rem)' }}>
        <Story />
      </div>
    )
  ]
}

const Template = (args) => <Zoomer {...args} />

export const Default = Template.bind({})
Default.args = {
  // src: getGalleryImages({ count: 1 })[0],
  hotspots: [
    { x: 0.57753, y: 0.60481, tooltip: 'Alloy wheels' },
    { x: 0.31619, y: 0.25429, tooltip: 'Springy thingy' },
    { x: 0.20286, y: 0.41429, tooltip: 'Petrol cap' },
    { x: 0.67524, y: 0.48571, tooltip: 'Shiny!' },
    { x: 0.45378, y: 0.40091, tooltip: 'Wing mirror' }
  ]
}

export const Controls = Template.bind({})
Controls.args = {
  ...Default.args,
  controls: true
}

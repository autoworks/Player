import React from 'react'
import InteriorPanorama from '.'

export default {
  title: 'Unsorted/InteriorPanorama',
  component: InteriorPanorama
}

const Template = (args) => <InteriorPanorama {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Default content'
}

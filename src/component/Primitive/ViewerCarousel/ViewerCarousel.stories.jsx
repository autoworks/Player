import React from 'react'
import ViewerCarousel from '.'

export default {
  title: 'Unsorted/ViewerCarousel',
  component: ViewerCarousel
}

const Template = (args) => <ViewerCarousel {...args} />

export const Default = Template.bind({})
Default.args = {}

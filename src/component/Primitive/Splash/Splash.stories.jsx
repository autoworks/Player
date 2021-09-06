import React from 'react'
import Splash from '.'

export default {
  title: 'Unsorted/Splash',
  component: Splash
}

const Template = (args) => <Splash {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Duration = Template.bind({})
Duration.args = {
  duration: 10000
}

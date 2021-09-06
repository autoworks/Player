import React from 'react'
import LoadingProgress from '.'

export default {
  title: 'Unsorted/LoadingProgress',
  component: LoadingProgress
}

const Template = (args) => <LoadingProgress {...args} />

export const Default = Template.bind({})
Default.args = {
  progress: 50
}

export const Inverse = Template.bind({})
Inverse.parameters = {
  backgrounds: { default: 'dark' }
}
Inverse.args = {
  ...Default.args,
  inverse: true
}

export const Empty = Template.bind({})
Empty.args = {
  ...Default.args,
  progress: 0
}

export const Full = Template.bind({})
Full.args = {
  ...Default.args,
  progress: 100
}

import React from 'react'
import Panel from '.'

export default {
  title: 'Unsorted/Panel',
  component: Panel
}

const Template = (args) => <Panel {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Default content'
}

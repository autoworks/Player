import React from 'react'
import Tag from '.'

export default {
  title: 'Unsorted/Tag',
  component: Tag
}

const Template = (args) => <Tag {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Default content'
}

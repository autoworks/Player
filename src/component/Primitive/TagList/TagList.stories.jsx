import React from 'react'
import TagList from '.'

import Tag from '@/component/Primitive/Tag'

export default {
  title: 'Unsorted/TagList',
  component: TagList
}

const Template = (args) => <TagList {...args} />

export const Default = Template.bind({})

Default.args = {
  children: [
    <Tag key="1">Tag one</Tag>,
    <Tag key="2">Tag two</Tag>,
    <Tag key="3">Tag three</Tag>,
    <Tag key="4">Tag four</Tag>,
    <Tag key="5">Tag five</Tag>,
    <Tag key="6">Tag six</Tag>,
    <Tag key="7">Tag seven</Tag>,
    <Tag key="8">Tag eight</Tag>
  ]
}

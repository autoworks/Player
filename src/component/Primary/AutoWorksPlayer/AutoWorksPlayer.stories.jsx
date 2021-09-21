import React from 'react'
import AutoWorksPlayer from '.'

import config from '@/fixture/config'
import items from '@/fixture/items'

export default {
  title: 'Unsorted/AutoWorksPlayer',
  component: AutoWorksPlayer
}

const Template = (args) => <AutoWorksPlayer {...args} />

export const Default = Template.bind({})
Default.args = {
  items,
  ...config
}

export const SingleItem = Template.bind({})
SingleItem.args = {
  items: [items[3]],
  ...config
}

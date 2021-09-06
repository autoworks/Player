import React from 'react'
import ViewerPlaceholder from '.'

import items from '@/fixture/items'

export default {
  title: 'Unsorted/ViewerPlaceholder',
  component: ViewerPlaceholder
}

const Template = (args) => <ViewerPlaceholder {...args} />

export const Default = Template.bind({})
Default.args = {
  items
}

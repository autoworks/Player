import React from 'react'
import AutoWorksPlayer from '.'

export default {
  title: 'Unsorted/AutoWorksPlayer',
  component: AutoWorksPlayer
}

const Template = (args) => <AutoWorksPlayer {...args} />

export const Default = Template.bind({})

Default.args = {}

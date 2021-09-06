import React from 'react'
import ButtonSingle from '.'

export default {
  title: 'Unsorted/ButtonSingle',
  component: ButtonSingle
}

const Template = (args) => <ButtonSingle {...args} />

export const Default = Template.bind({})

Default.args = {
  icon: '_placeholder'
}

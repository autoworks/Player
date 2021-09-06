import React from 'react'
import Progress from '.'

export default {
  title: 'Unsorted/Progress',
  component: Progress,
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    }
  }
}

const Template = (args) => <Progress {...args} />

export const Default = Template.bind({})

Default.args = {
  progress: 50
}

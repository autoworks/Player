import React from 'react'
import InfoPanel from '.'

export default {
  title: 'Unsorted/InfoPanel',
  component: InfoPanel
}

const Template = (args) => <InfoPanel {...args} />

export const Default = Template.bind({})
Default.args = {
  heading: 'Volkswagen Tiguan',
  description: 'SWB SEL 2.0 TDI 4Motion',
  tags: ['Tag one', 'Another', 'One more', 'Fourth tag'],
  headingSecondary: '£26,990',
  descriptionSecondary: '£447/Month (PCP)'
}

export const CustomContent = Template.bind({})
CustomContent.args = {
  children: <img src="https://via.placeholder.com/100" alt="Example content" />
}

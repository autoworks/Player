import React from 'react'
import FilmstripFrame from '.'

export default {
  title: 'Unsorted/FilmstripFrame',
  component: FilmstripFrame
}

const Template = (args) => <FilmstripFrame {...args} />

export const Default = Template.bind({})
Default.args = {
  src:
    'https://media.auto.works/300/150/cover/a8db1dbafbf56025fed64ab5641ab5e9:f3eea252485b09a27764adbbbbc7c168'
}

export const Caption = Template.bind({})
Caption.args = {
  ...Default.args,
  caption: 'Example caption'
}

export const Overlay = Template.bind({})
Overlay.args = {
  ...Default.args,
  icon: 'rotate-camera',
  caption: 'Exterior'
}

export const Active = Template.bind({})
Active.args = {
  ...Default.args,
  active: true
}

export const Inverse = Template.bind({})
Inverse.parameters = {
  backgrounds: { default: 'dark' }
}
Inverse.args = {
  ...Default.args,
  inverse: true
}

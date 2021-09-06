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
    'https://res.cloudinary.com/citygate/image/upload/w_300,h_150,c_fill/autoloadit/Img/pic/10/34794/S-12122637-637.jpg'
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

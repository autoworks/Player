import React from 'react'

import ImageFrame from '.'
import ResponsiveMedia from '@/component/Primitive/ResponsiveMedia'

export default {
  title: 'Unsorted/ImageFrame',
  component: ImageFrame,
  argTypes: { children: { control: { type: null } } },
  decorators: [
    (story) => <ResponsiveMedia ratio={10 / 16}>{story()}</ResponsiveMedia>
  ]
}

const Template = (args) => <ImageFrame {...args} />

export const CorrectRatio = Template.bind({})
CorrectRatio.args = {
  children: <img src="https://via.placeholder.com/1600x900" alt="" />
}

export const ImageWithTallerRatio = Template.bind({})
ImageWithTallerRatio.args = {
  children: <img src="https://via.placeholder.com/900x1600" alt="" />
}

export const ImageWithWiderRatio = Template.bind({})
ImageWithWiderRatio.args = {
  children: <img src="https://via.placeholder.com/1600x450" alt="" />
}

export const ImageWithSmallerSize = Template.bind({})
ImageWithSmallerSize.args = {
  children: <img src="https://via.placeholder.com/100x100" alt="" />
}

export const EmptyState = Template.bind({})
EmptyState.args = {}

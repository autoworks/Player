import React from 'react'
import { action } from '@storybook/addon-actions'
import ButtonGroup from '.'

import Icon from '../Icon'

export default {
  title: 'Unsorted/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
}

const Template = (args) => <ButtonGroup {...args} />

export const Default = Template.bind({})

Default.args = {
  children: [
    <ButtonGroup.Item
      key="1"
      active
      icon="rotate-camera"
      onClick={action('Exterior')}
    >
      Exterior
    </ButtonGroup.Item>,
    <ButtonGroup.Item key="2" icon="rotate-camera" onClick={action('Interior')}>
      Interior
    </ButtonGroup.Item>,
    <ButtonGroup.Item key="3" icon="photo" onClick={action('Photos')}>
      Photos
    </ButtonGroup.Item>,
    <ButtonGroup.Item key="4" icon="video" onClick={action('Video')}>
      Video
    </ButtonGroup.Item>
  ]
}

export const Inverse = Template.bind({})
Inverse.parameters = {
  backgrounds: { default: 'dark' }
}
Inverse.args = {
  ...Default.args,
  inverse: true
}

export const TightModifier = Template.bind({})
TightModifier.parameters = {
  backgrounds: { default: 'dark' }
}
TightModifier.args = {
  children: (
    <ButtonGroup.Item tight>
      <Icon type="zoom-in" a11yText="Zoom in" />
    </ButtonGroup.Item>
  ),
  inverse: true
}

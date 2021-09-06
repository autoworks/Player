import React from 'react'
import { storiesOf } from '@storybook/react'
import Placeholder from '../../Helper/Placeholder'

import Inline from '.'

const stories = storiesOf('Layout/Inline', module)

stories.add(
  'Info',
  () => (
    <Inline>
      {[...Array(10).keys()].map((i) => (
        <Placeholder key={i} width={80} height={40} />
      ))}
    </Inline>
  ),
  {
    info: {
      inline: true,
      text: `
        A wrapper component which evenly horizontally spaces its children.
      `
    }
  }
)

stories.add('Default gap', () => (
  <Inline>
    {[...Array(20).keys()].map((i) => (
      <Placeholder key={i} width={80} height={40} />
    ))}
  </Inline>
))

stories.add('Custom gap', () => (
  <Inline gap="small">
    {[...Array(20).keys()].map((i) => (
      <Placeholder key={i} width={80} height={40} />
    ))}
  </Inline>
))

stories.add('Shrink', () => (
  <Inline gap="small" shrink>
    {[...Array(20).keys()].map((i) => (
      <Placeholder key={i} width={80} height={40} />
    ))}
  </Inline>
))

import React from 'react'
import { storiesOf } from '@storybook/react'
import Placeholder from '../../Helper/Placeholder'

import Stack from '.'

const stories = storiesOf('Layout/Stack', module)

stories.add(
  'Info',
  () => (
    <Stack>
      {[...Array(4).keys()].map((i) => (
        <Placeholder key={i} height={80} />
      ))}
    </Stack>
  ),
  {
    info: {
      inline: true,
      text: `
        A wrapper component which evenly vertically-spaces its children.
      `
    }
  }
)

stories.add('Default gap', () => (
  <Stack>
    {[...Array(4).keys()].map((i) => (
      <Placeholder key={i} height={80} />
    ))}
  </Stack>
))

stories.add('Custom gap', () => (
  <Stack gap="large">
    {[...Array(4).keys()].map((i) => (
      <Placeholder key={i} height={80} />
    ))}
  </Stack>
))

stories.add('Nested stacks', () => (
  <Stack gap="large">
    <Placeholder height={160} />
    <Stack gap="small">
      {[...Array(3).keys()].map((i) => (
        <Placeholder key={i} height={80} />
      ))}
    </Stack>
    <Placeholder height={160} />
  </Stack>
))

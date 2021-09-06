import React from 'react'
import { storiesOf } from '@storybook/react'

import Rule from '.'

const stories = storiesOf('Core/Rule', module)

stories.add('Info', () => <Rule />, {
  info: {
    inline: true,
    text: `
      A simple horizontal rule, with zero height to not affect vertical
      rhythm. Can optionally render as a \`<hr />\` if it makes semantic sense.
    `
  }
})

stories.add('Default state', () => (
  <div style={{ padding: 16 }}>
    <Rule />
  </div>
))

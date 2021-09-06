import React from 'react'
import { storiesOf } from '@storybook/react'

import SiteContainer from '.'

const stories = storiesOf('Structure/SiteContainer', module)

stories.add('Default state', () => (
  <SiteContainer>Example Content</SiteContainer>
))

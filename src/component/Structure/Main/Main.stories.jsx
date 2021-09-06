import React from 'react'
import { storiesOf } from '@storybook/react'

import Main from '.'

const stories = storiesOf('Structure/Main', module)

stories.add('Default state', () => <Main>Example Content</Main>)

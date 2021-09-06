import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '.'

const stories = storiesOf('Structure/Header', module)

stories.add('Default state', () => <Header />)

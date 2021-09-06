import React from 'react'
import { storiesOf } from '@storybook/react'

import GlobalError from '.'

const stories = storiesOf('Structure/GlobalError', module)

stories.add('Default state', () => <GlobalError />)

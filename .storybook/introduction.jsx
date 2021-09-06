import React from 'react'
import { storiesOf } from '@storybook/react'

import items from '@/fixture/items'
import config from '@/fixture/config'

const stories = storiesOf('Setup', module)

stories.add('Items Object', () => <pre>{JSON.stringify(items, '', 2)}</pre>)

stories.add('Config Object', () => <pre>{JSON.stringify(config, '', 2)}</pre>)

import React from 'react'

import Player from '@/component/Structure/Player'

import config from '@/fixture/config'
import items from '@/fixture/items'

const options = {
  items,
  ...config
}

const AutoWorksPlayer = () => <Player {...options} />

export default AutoWorksPlayer

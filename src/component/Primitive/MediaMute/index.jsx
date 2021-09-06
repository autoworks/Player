import React from 'react'
import { bool, func } from 'prop-types'

import IconButton from '../IconButton'

const MediaVolume = ({ muted, onClick }) => {
  return (
    <IconButton
      icon={muted ? 'mute' : 'volume-up'}
      a11yText={muted ? 'Volume full' : 'Mute'}
      onClick={onClick}
      small
      increaseHitArea
    />
  )
}

MediaVolume.propTypes = {
  muted: bool,
  onClick: func.isRequired
}

export default MediaVolume

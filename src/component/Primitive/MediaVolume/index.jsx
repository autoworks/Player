import React from 'react'
import { bool, func, number } from 'prop-types'

import IconButton from '../IconButton'
import MediaRange from '../MediaRange'

import ShrinkWrap from '../ShrinkWrap'

const MediaVolume = ({ inverse, onChange, volume }) => {
  const handleChange = (e) => {
    onChange && onChange(e.currentTarget.value)
  }

  return (
    <ShrinkWrap fullWidth>
      <ShrinkWrap.Item shrink vAlign="middle">
        <IconButton
          icon="volume-down"
          a11yText="Mute"
          onClick={() => onChange(0)}
          small
        />
      </ShrinkWrap.Item>
      <ShrinkWrap.Item vAlign="middle">
        <MediaRange
          label="Volume"
          min={0}
          max={100}
          onChange={handleChange}
          value={`${volume}`}
          name="volume"
          inverse={inverse}
        />
      </ShrinkWrap.Item>
      <ShrinkWrap.Item shrink vAlign="middle">
        <IconButton
          icon="volume-up"
          a11yText="Volume Full"
          onClick={() => onChange(100)}
          small
        />
      </ShrinkWrap.Item>
    </ShrinkWrap>
  )
}

MediaVolume.defaultProps = {
  volume: 100
}

MediaVolume.propTypes = {
  inverse: bool,
  onChange: func.isRequired,
  volume: number
}

export default MediaVolume

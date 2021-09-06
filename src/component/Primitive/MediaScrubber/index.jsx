import React from 'react'
import { bool, func, number } from 'prop-types'
import classNames from 'classnames'

import styles from './MediaScrubber.module.scss'

import formatTime from '@/lib/time-formatter'

import MediaRange from '../MediaRange'

import ShrinkWrap from '../ShrinkWrap'

const MediaScrubber = ({ duration, inverse, progress, onChange }) => {
  const handleChange = (e) => {
    onChange && onChange(e)
  }

  return (
    <div
      className={classNames(styles.MediaScrubber, inverse && styles.inverse)}
    >
      <ShrinkWrap fullWidth>
        <ShrinkWrap.Item vAlign="middle">
          <MediaRange
            label="Video Progress"
            min={0}
            // step="0.25"
            max={Math.floor(duration)}
            onChange={handleChange}
            value={`${progress}`}
            name="scrubber"
            inverse={inverse}
          />
        </ShrinkWrap.Item>
        <ShrinkWrap.Item shrink noWrap vAlign="middle">
          <div className={styles.MediaScrubberSummary}>
            {formatTime(progress)} <span>/ {formatTime(duration)}</span>
          </div>
        </ShrinkWrap.Item>
      </ShrinkWrap>
    </div>
  )
}

MediaScrubber.defaultProps = {
  progress: 0,
  duration: 0
}

MediaScrubber.propTypes = {
  duration: number,
  inverse: bool,
  onChange: func,
  progress: number
}

export default MediaScrubber

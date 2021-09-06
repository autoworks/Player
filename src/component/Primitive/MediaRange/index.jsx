import React from 'react'
import { bool, func, number, string } from 'prop-types'
import classNames from 'classnames'

import styles from './MediaRange.module.scss'

import VisuallyHidden from '@/component/Primitive/VisuallyHidden'

const MediaRange = ({
  inverse,
  label,
  max,
  min,
  name,
  onChange,
  step,
  value
}) => (
  <label>
    <VisuallyHidden>{label}</VisuallyHidden>
    <input
      className={classNames(styles.MediaRange, inverse && styles.inverse)}
      max={max}
      min={min}
      name={name}
      onChange={onChange}
      step={step}
      style={{ backgroundSize: `${(value / max) * 100}% 100%` }}
      type="range"
      value={value}
    />
  </label>
)

MediaRange.defaultProps = {
  max: 100,
  min: 0
}

MediaRange.propTypes = {
  inverse: bool,
  label: string,
  max: number,
  min: number,
  name: string.isRequired,
  onChange: func,
  step: number,
  value: string
}

export default MediaRange

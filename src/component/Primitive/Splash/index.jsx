import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { func, number } from 'prop-types'

import styles from './Splash.module.scss'

import Icon from '../Icon'

const Splash = ({ duration, onComplete }) => {
  const [exiting, setExiting] = useState(false)
  const [complete, setComplete] = useState(false)

  const exitingDuration = 500
  const exitingDurationOffset = Math.max(duration - 500, 0)

  useEffect(() => {
    const exitingTimer = setTimeout(() => {
      setExiting(true)
    }, exitingDurationOffset)
    const completeTimer = setTimeout(() => {
      setComplete(true)
      onComplete && onComplete()
    }, duration)

    return () => {
      clearTimeout(exitingTimer)
      clearTimeout(completeTimer)
    }
  }, [duration, exitingDurationOffset, onComplete])

  if (complete) return null

  return (
    <div
      className={classNames(styles.Splash, exiting && styles.exiting)}
      style={{ transitionDuration: `${exitingDuration}ms` }}
    >
      <Icon type="autoworks" a11yText="" />
    </div>
  )
}

Splash.propTypes = {
  duration: number,
  onComplete: func
}

export default Splash

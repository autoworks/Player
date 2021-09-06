import React from 'react'
import { bool, number, string } from 'prop-types'
import classNames from 'classnames'

import styles from './Spinner.module.scss'

import VisuallyHidden from '../VisuallyHidden'

const paths = [
  'M8.1,6.3L8.1,6.3C7.7,6.5,7.1,6.4,6.9,6L5.2,3C5,2.6,5.1,2.1,5.5,1.8 c0.4-0.2,0.9-0.1,1.2,0.3l1.7,3C8.6,5.5,8.5,6.1,8.1,6.3',
  'M6.3,8.1L6.3,8.1C6.1,8.5,5.5,8.6,5.1,8.4l-3-1.7C1.7,6.4,1.6,5.9,1.8,5.5 S2.6,5,3,5.2l3,1.7C6.4,7.1,6.5,7.7,6.3,8.1',
  'M5.6,10.5L5.6,10.5c0,0.5-0.4,0.9-0.9,0.9H1.4c-0.5,0-0.9-0.4-0.9-0.9 s0.4-0.9,0.9-0.9h3.4C5.3,9.6,5.6,10,5.6,10.5',
  'M6.3,12.9L6.3,12.9c0.2,0.4,0.1,0.9-0.3,1.2l-3,1.7c-0.4,0.2-0.9,0.1-1.2-0.3 s-0.1-0.9,0.3-1.2l3-1.7C5.5,12.4,6.1,12.5,6.3,12.9',
  'M8.1,14.7L8.1,14.7c0.4,0.2,0.5,0.8,0.3,1.2l-1.7,3c-0.2,0.4-0.8,0.5-1.2,0.3 C5.1,18.9,5,18.4,5.2,18l1.7-3C7.1,14.6,7.7,14.5,8.1,14.7',
  'M10.5,15.4L10.5,15.4c0.5,0,0.9,0.4,0.9,0.9v3.4c0,0.5-0.4,0.9-0.9,0.9 s-0.9-0.4-0.9-0.9v-3.4C9.6,15.7,10,15.4,10.5,15.4',
  'M12.9,14.7L12.9,14.7c0.4-0.2,0.9-0.1,1.2,0.3l1.7,3c0.2,0.4,0.1,0.9-0.3,1.2 c-0.4,0.2-0.9,0.1-1.2-0.3l-1.7-3C12.4,15.5,12.5,14.9,12.9,14.7',
  'M14.7,12.9L14.7,12.9c0.2-0.4,0.8-0.5,1.2-0.3l3,1.7c0.4,0.2,0.5,0.8,0.3,1.2 c-0.2,0.4-0.8,0.5-1.2,0.3l-3-1.7C14.6,13.9,14.5,13.3,14.7,12.9',
  'M15.4,10.5L15.4,10.5c0-0.5,0.4-0.9,0.9-0.9h3.4c0.5,0,0.9,0.4,0.9,0.9 s-0.4,0.9-0.9,0.9h-3.4C15.7,11.4,15.4,11,15.4,10.5',
  'M14.7,8.1L14.7,8.1c-0.2-0.4-0.1-0.9,0.3-1.2l3-1.7c0.4-0.2,0.9-0.1,1.2,0.3 c0.2,0.4,0.1,0.9-0.3,1.2l-3,1.7C15.5,8.6,14.9,8.5,14.7,8.1',
  'M12.9,6.3L12.9,6.3c-0.4-0.2-0.5-0.8-0.3-1.2l1.7-3c0.2-0.4,0.8-0.5,1.2-0.3 C15.9,2.1,16,2.6,15.8,3l-1.7,3C13.9,6.4,13.3,6.5,12.9,6.3',
  'M10.5,5.6L10.5,5.6c-0.5,0-0.9-0.4-0.9-0.9V1.4c0-0.5,0.4-0.9,0.9-0.9 s0.9,0.4,0.9,0.9v3.4C11.4,5.3,11,5.6,10.5,5.6'
]

const Spinner = ({ a11yText, paused, revealDelay, size }) => (
  <div
    className={classNames(styles.Spinner, paused && styles.paused)}
    role="alert"
    aria-live="assertive"
    style={{
      ...(revealDelay && { animationDelay: `${revealDelay}ms` }),
      ...(size && {
        height: size,
        lineHeight: `${size}px`,
        width: size
      })
    }}
  >
    <div className={classNames(styles.SpinnerInner)}>
      <VisuallyHidden>{a11yText}</VisuallyHidden>
      <svg viewBox="0 0 21 21">
        {paths.map((path, i) => (
          <path key={i} d={path} />
        ))}
      </svg>
    </div>
  </div>
)

Spinner.defaultProps = {
  a11yText: 'Loading…'
}

Spinner.propTypes = {
  a11yText: string,
  paused: bool,
  revealDelay: number,
  size: number
}

export default Spinner

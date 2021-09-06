import React from 'react'
import { bool, number } from 'prop-types'
import classNames from 'classnames'

import styles from './Progress.module.scss'

const Progress = ({ inverse, progress }) => (
  <div className={classNames(styles.Progress, inverse && styles.inverse)}>
    <div className={styles.ProgressTrack}>
      <div className={styles.ProgressBar} style={{ width: `${progress}%` }} />
    </div>
  </div>
)

Progress.defaultProps = {
  progress: 0,
  total: 100
}

Progress.propTypes = {
  inverse: bool,
  progress: number
}

export default Progress

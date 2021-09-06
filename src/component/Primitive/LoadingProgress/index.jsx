import React from 'react'
import { bool, number } from 'prop-types'
import classNames from 'classnames'

import styles from './LoadingProgress.module.scss'

import Progress from '@/component/Primitive/Progress'

const LoadingProgress = ({ inverse, progress }) => {
  return (
    <div
      className={classNames(styles.LoadingProgress, inverse && styles.inverse)}
    >
      <div className={styles.LoadingProgressSummary}>
        Loading {Math.floor(progress)}%
      </div>
      <Progress progress={progress} inverse={inverse} />
    </div>
  )
}

LoadingProgress.defaultProps = {
  progress: 0
}

LoadingProgress.propTypes = {
  inverse: bool,
  progress: number
}

export default LoadingProgress

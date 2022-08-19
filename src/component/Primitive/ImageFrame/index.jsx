import React from 'react'
import { node, bool } from 'prop-types'
import classNames from 'classnames'

import styles from './ImageFrame.module.scss'
/**
 * Creates an area of a fixed ratio, then resizes images within to stay
 * within the bounds of the area, without stretching smaller images.
 */

const ImageFrame = ({ children, inverted }) => (
  <div className={classNames(styles.ImageFrame, inverted && styles.Inverted)}>
    {children}
  </div>
)

ImageFrame.propTypes = {
  children: node,
  inverted: bool
}

export default ImageFrame

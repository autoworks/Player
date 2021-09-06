import React from 'react'
import { node } from 'prop-types'

import styles from './ImageFrame.module.scss'

/**
 * Creates an area of a fixed ratio, then resizes images within to stay
 * within the bounds of the area, without stretching smaller images.
 */

const ImageFrame = ({ children }) => (
  <div className={styles.ImageFrame}>{children}</div>
)

ImageFrame.propTypes = {
  children: node
}

export default ImageFrame

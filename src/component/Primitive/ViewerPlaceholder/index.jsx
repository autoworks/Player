import React from 'react'
import { node, bool } from 'prop-types'

import ImageFrame from '../ImageFrame'
import ResponsiveMedia from '../ResponsiveMedia'

import styles from './ViewerPlaceholder.module.scss'

const ViewerPlaceholder = ({ children, hideThumbnails, inverse }) => (
  <div className={styles.ViewerPlaceholder}>
    <ResponsiveMedia ratio={10 / 16}>
      <ImageFrame inverse={inverse}>{children}</ImageFrame>
    </ResponsiveMedia>
    {!hideThumbnails && (
      <div className={styles.ViewerPlaceholderFilmstrip}>
        {[...Array(10).keys()].map((i) => (
          <div
            className={styles.ViewerPlaceholderFilmstripFrame}
            key={`ViewerPlaceholderFilmstrip:${i}`}
          >
            <ResponsiveMedia
              ratio={1 / 2}
              key={`ViewerPlaceholderFilmstrip:${i}`}
            >
              <ImageFrame inverse={inverse} />
            </ResponsiveMedia>
          </div>
        ))}
      </div>
    )}
  </div>
)

ViewerPlaceholder.propTypes = {
  children: node,
  hideThumbnails: bool,
  inverse: bool
}

export default ViewerPlaceholder

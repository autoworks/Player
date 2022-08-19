import React from 'react'
import { node, bool } from 'prop-types'

import ImageFrame from '../ImageFrame'
import ResponsiveMedia from '../ResponsiveMedia'

import styles from './ViewerPlaceholder.module.scss'

const ViewerPlaceholder = ({ children, inverted }) => (
  <div className={styles.ViewerPlaceholder}>
    <ResponsiveMedia ratio={10 / 16}>
      <ImageFrame inverted={inverted}>{children}</ImageFrame>
    </ResponsiveMedia>
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
            <ImageFrame inverted={inverted} />
          </ResponsiveMedia>
        </div>
      ))}
    </div>
  </div>
)

ViewerPlaceholder.propTypes = {
  children: node,
  inverted: bool
}

export default ViewerPlaceholder

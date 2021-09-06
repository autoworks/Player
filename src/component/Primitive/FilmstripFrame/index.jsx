import React from 'react'
import { bool, number, oneOf, string } from 'prop-types'
import classNames from 'classnames'

import styles from './FilmstripFrame.module.scss'

import HotspotMini from '../HotspotMini'
import Icon from '../Icon'
import ImageFrame from '../ImageFrame'
import ResponsiveImage from '../ResponsiveImage'
import ResponsiveMedia from '../ResponsiveMedia'

const FilmstripFrame = ({
  active,
  alt,
  caption,
  hotspot,
  icon,
  inverse,
  ratio,
  src
}) => (
  <div
    className={classNames(
      styles.FilmstripFrame,
      active && styles.active,
      icon && styles.hasIcon,
      inverse && styles.inverse
    )}
  >
    <div className={styles.FilmstripFrameInner}>
      <ResponsiveMedia ratio={ratio}>
        <ImageFrame>
          <ResponsiveImage
            width={200}
            height={100}
            src={src}
            alt={alt || ''}
            loading="lazy"
          />
        </ImageFrame>
      </ResponsiveMedia>
      {(caption || icon) && (
        <div className={styles.FilmstripFrameOverlay}>
          <div className={styles.FilmstripFrameOverlayInner}>
            {icon && <Icon type={icon} a11yText="" height={30} />}
            {caption}
          </div>
        </div>
      )}
    </div>
    <div className={styles.FilmStripFrameHighlight} />
    {hotspot && (
      <div className={styles.FilmStripFrameHotspot}>
        <HotspotMini />
      </div>
    )}
  </div>
)

FilmstripFrame.defaultProps = {
  ratio: 1 / 2
}

FilmstripFrame.propTypes = {
  active: bool,
  alt: string,
  caption: string,
  hotspot: bool,
  icon: oneOf(['', 'photo', 'rotate-camera', 'video']),
  inverse: bool,
  ratio: number,
  src: string.isRequired
}

export default FilmstripFrame

import React, { useEffect, useRef, useState } from 'react'
import {
  array,
  bool,
  func,
  number,
  node,
  object,
  shape,
  string
} from 'prop-types'
import classNames from 'classnames'
import { MapInteractionCSS } from 'react-map-interaction'
import {
  mapTranslationToDecimal,
  mapTranslationToPixel
} from '@/lib/map-translation-converter'

import styles from './ZoomerImage.module.scss'

import HotspotFrame from '../HotspotFrame'
import ResponsiveImage from '../ResponsiveImage'
import ResponsiveMedia from '../ResponsiveMedia'

const ZoomerImage = ({
  children,
  scale,
  x,
  y,
  onChange,
  ratio,
  hotspots,
  onHotspotClick,
  image,
  disableZoom,
  minScale,
  maxScale,
  initialised
}) => {
  const [formattedValue, updateFormattedValue] = useState({
    scale: 1,
    translation: {
      x: 0.5,
      y: 0.5
    }
  })
  const [wrapperWidth, updateWrapperWidth] = useState(0)

  useEffect(() => {
    updateWrapperWidth(wrapper.current.clientWidth)
  }, [])

  const wrapper = useRef()

  const handleChange = ({ scale, translation }) => {
    const newTranslation = mapTranslationToDecimal({
      scale,
      width: wrapper.current.clientWidth,
      height: wrapper.current.clientHeight,
      offsetX: translation.x,
      offsetY: translation.y
    })
    onChange && onChange({ scale, translation: newTranslation })
  }

  useEffect(() => {
    const newTranslation = mapTranslationToPixel({
      scale,
      width: wrapper.current.clientWidth,
      height: wrapper.current.clientHeight,
      offsetX: x,
      offsetY: y
    })
    updateFormattedValue({ scale, translation: newTranslation })
  }, [x, y, scale])

  return (
    <div
      className={classNames(
        styles.ZoomerImage,
        scale === 1 && styles.defaultScale
      )}
      ref={wrapper}
    >
      <MapInteractionCSS
        value={formattedValue}
        onChange={handleChange}
        disableZoom={disableZoom}
        minScale={minScale}
        maxScale={maxScale}
      >
        <div className={styles.ZoomerImageContent}>
          {children}
          <HotspotFrame
            scale={scale}
            hotspots={hotspots}
            onClick={onHotspotClick}
          >
            <ResponsiveMedia ratio={ratio}>
              {/* Load minimap image as low-res placeholder */}
              {image.minimap && (
                <ResponsiveImage
                  alt=""
                  loading="lazy"
                  src={image.minimap}
                  width={1000}
                  height={562}
                />
              )}

              {initialised && (
                <ResponsiveImage
                  alt={image.alt || ''}
                  loading="eager"
                  src={image.src}
                  srcSet={
                    image.srcSet &&
                    Object.entries(image.srcSet).map((src) => {
                      return {
                        width: parseInt(src[0], 10),
                        src: src[1]
                      }
                    })
                  }
                  sizes={[`${wrapperWidth * scale}px`]}
                  width={1000}
                  height={562}
                  // onLoad={handleImageLoad}
                  // onError={handleImageLoad}
                />
              )}
            </ResponsiveMedia>
          </HotspotFrame>
        </div>
      </MapInteractionCSS>
    </div>
  )
}

ZoomerImage.defaultProps = {
  image: {},
  minScale: 0.05,
  maxScale: 3
}

ZoomerImage.propTypes = {
  scale: number,
  x: number,
  y: number,
  onChange: func,
  children: node,
  ratio: number,
  hotspots: array, // TODO: shape
  onHotspotClick: func,
  disableZoom: bool,
  image: shape({
    alt: string,
    src: string.isRequired,
    srcSet: object,
    minimap: string
  }),
  minScale: number,
  maxScale: number,
  initialised: bool
}

export default ZoomerImage
